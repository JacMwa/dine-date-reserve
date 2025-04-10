
import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ReservationForm from "@/components/reservation/ReservationForm";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ReservationsPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="py-12 px-4 container-custom">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Make a Reservation</h1>
          <p className="text-muted-foreground">
            Secure your table at Le Bistro for an unforgettable dining experience.
          </p>
        </div>
        
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-restaurant-burgundy/10 pb-2">
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-restaurant-burgundy" />
              Table Reservation
            </CardTitle>
            <CardDescription>
              Fill in the details below to book your table
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ReservationForm />
          </CardContent>
        </Card>

        <div className="mt-12 space-y-4">
          <h3 className="text-xl font-serif">Reservation Policies</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Reservations can be made up to 30 days in advance.</li>
            <li>Please arrive within 15 minutes of your reservation time.</li>
            <li>We hold reservations for 15 minutes past the reservation time.</li>
            <li>For parties of 6 or more, please contact us directly.</li>
            <li>Cancellations should be made at least 24 hours in advance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
