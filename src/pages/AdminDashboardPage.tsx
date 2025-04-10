
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartPie, 
  Users, 
  CalendarCheck, 
  Utensils,
  Calendar
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Admin emails that have access to the dashboard
const ADMIN_EMAILS = ["admin@restaurant.com"];

type ReservationStats = {
  total: number;
  today: number;
  upcoming: number;
  byTime: { name: string; value: number }[];
};

type Reservation = {
  date: string;
  time: string;
  guests: string;
  name: string;
  phone: string;
  specialRequests?: string;
};

export default function AdminDashboardPage() {
  const { isAuthenticated, user } = useAuth();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [stats, setStats] = useState<ReservationStats>({
    total: 0,
    today: 0,
    upcoming: 0,
    byTime: []
  });

  const COLORS = ['#7E69AB', '#1A1F2C', '#D6BCFA', '#F97316'];

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const storedReservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    setReservations(storedReservations);
    
    // Calculate statistics
    const today = new Date().toISOString().split('T')[0];
    const todayReservations = storedReservations.filter((r: Reservation) => r.date === today);
    const upcomingReservations = storedReservations.filter((r: Reservation) => r.date > today);
    
    // Group reservations by time slot
    const timeSlots: Record<string, number> = {};
    storedReservations.forEach((r: Reservation) => {
      if (!timeSlots[r.time]) timeSlots[r.time] = 0;
      timeSlots[r.time]++;
    });
    
    const timeData = Object.entries(timeSlots).map(([name, value]) => ({ name, value }));
    
    setStats({
      total: storedReservations.length,
      today: todayReservations.length,
      upcoming: upcomingReservations.length,
      byTime: timeData
    });
  }, []);

  // Check if user is authenticated and is an admin
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  const isAdmin = user && ADMIN_EMAILS.includes(user.email);
  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="py-12 px-4 container-custom">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">Admin Dashboard</h1>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">Total Reservations</CardTitle>
              <CalendarCheck className="h-5 w-5 text-restaurant-burgundy" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.total}</p>
              <p className="text-sm text-muted-foreground">All-time bookings</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">Today's Bookings</CardTitle>
              <Calendar className="h-5 w-5 text-restaurant-burgundy" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.today}</p>
              <p className="text-sm text-muted-foreground">Reservations for today</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">Upcoming</CardTitle>
              <Users className="h-5 w-5 text-restaurant-burgundy" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.upcoming}</p>
              <p className="text-sm text-muted-foreground">Future reservations</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Chart Section */}
          <Card className="col-span-1 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartPie className="h-5 w-5 text-restaurant-burgundy" />
                Popular Booking Times
              </CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              {stats.byTime.length > 0 ? (
                <ChartContainer
                  config={{
                    time: {
                      theme: {
                        light: "#7E69AB",
                        dark: "#D6BCFA",
                      }
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Pie
                        data={stats.byTime}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => 
                          `${name} (${(percent * 100).toFixed(0)}%)`
                        }
                      >
                        {stats.byTime.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-muted-foreground">No booking data available</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Booked Tables */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-restaurant-burgundy" />
                Recent Reservations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservations.length > 0 ? (
                    reservations.slice(0, 5).map((reservation, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{reservation.name}</TableCell>
                        <TableCell>{reservation.date}</TableCell>
                        <TableCell>{reservation.time}</TableCell>
                        <TableCell>{reservation.guests}</TableCell>
                        <TableCell>{reservation.phone}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">No reservations found</TableCell>
                    </TableRow>
                  )}
                </TableBody>
                <TableCaption>
                  {reservations.length > 5 ? `Showing 5 of ${reservations.length} total reservations` : ""}
                </TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
