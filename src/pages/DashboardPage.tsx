
import { CalendarRange } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ReservationList from "@/components/reservation/ReservationList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="py-12 px-4 container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif mb-2">My Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name}! Manage your reservations here.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0 bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
            <Link to="/reservations">
              Book a New Table
            </Link>
          </Button>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-serif flex items-center gap-2 mb-6">
            <CalendarRange className="h-6 w-6 text-restaurant-burgundy" />
            Your Reservations
          </h2>
          <ReservationList />
        </div>
      </div>
    </div>
  );
}
