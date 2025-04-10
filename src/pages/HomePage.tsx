
import { Link } from "react-router-dom";
import { ArrowRight, Star, Utensils, CalendarDays, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-restaurant-dark text-white py-20 md:py-32">
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              Fine Dining Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Exquisite cuisine in an elegant atmosphere. Reserve your table today for an unforgettable dining experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90">
                <Link to="/reservations">Book a Table</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-restaurant-dark">
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
          style={{ opacity: 0.7 }}
        ></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-restaurant-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide an exceptional dining experience with attention to every detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto bg-restaurant-burgundy/10 w-16 h-16 flex items-center justify-center rounded-full">
                  <ChefHat className="h-8 w-8 text-restaurant-burgundy" />
                </div>
                <h3 className="text-xl font-serif mb-2">Renowned Chefs</h3>
                <p className="text-muted-foreground">
                  Our cuisine is crafted by internationally-trained chefs with a passion for culinary excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto bg-restaurant-burgundy/10 w-16 h-16 flex items-center justify-center rounded-full">
                  <Utensils className="h-8 w-8 text-restaurant-burgundy" />
                </div>
                <h3 className="text-xl font-serif mb-2">Exquisite Menu</h3>
                <p className="text-muted-foreground">
                  Seasonal ingredients prepared with artistry and precision for an unforgettable dining experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto bg-restaurant-burgundy/10 w-16 h-16 flex items-center justify-center rounded-full">
                  <Star className="h-8 w-8 text-restaurant-burgundy" />
                </div>
                <h3 className="text-xl font-serif mb-2">Perfect Ambiance</h3>
                <p className="text-muted-foreground">
                  Elegant surroundings designed to enhance your meal with the perfect atmosphere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-restaurant-burgundy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Experience Le Bistro?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your table now and indulge in an exceptional dining experience.
          </p>
          <Button asChild size="lg" className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90">
            <Link to="/reservations">
              Make a Reservation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied guests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Johnson",
                text: "The tasting menu was extraordinary. Each course was a delightful surprise, and the wine pairings were perfect."
              },
              {
                name: "Michael Chen",
                text: "Impeccable service and amazing food. The atmosphere is elegant without being stuffy. Highly recommended!"
              },
              {
                name: "Sophia Rodriguez",
                text: "Our anniversary dinner was perfect. The staff went above and beyond to make our evening special."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-restaurant-gold text-restaurant-gold" />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <p className="font-medium">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
