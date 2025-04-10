
import { useEffect, useState } from "react";
import { Calendar, Clock, Users, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type Reservation = {
  date: string;
  time: string;
  guests: string;
  name: string;
  phone: string;
  specialRequests?: string;
};

export function ReservationList() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const storedReservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    setReservations(storedReservations);
  }, []);

  const deleteReservation = (index: number) => {
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));

    toast({
      title: "Reservation Cancelled",
      description: "Your reservation has been cancelled.",
    });
  };

  if (reservations.length === 0) {
    return (
      <Card className="bg-muted/40">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">No reservations found. Book a table to get started!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {reservations.map((reservation, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-restaurant-burgundy/10 pb-2">
            <CardTitle className="text-lg">{reservation.name}</CardTitle>
            <CardDescription>{reservation.phone}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-restaurant-burgundy" />
                <span>{reservation.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-restaurant-burgundy" />
                <span>{reservation.time}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-restaurant-burgundy" />
                <span>
                  {reservation.guests} {parseInt(reservation.guests) === 1 ? "Guest" : "Guests"}
                </span>
              </div>
            </div>

            {reservation.specialRequests && (
              <div className="mt-4 text-sm text-muted-foreground">
                <strong>Special Requests:</strong> {reservation.specialRequests}
              </div>
            )}

            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => deleteReservation(index)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ReservationList;
