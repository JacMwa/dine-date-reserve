
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 px-4 container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">About Le Bistro</h1>
          <p className="text-muted-foreground">
            A journey through French cuisine and hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-serif mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, Le Bistro brings the essence of French cuisine to your neighborhood. 
              Our journey began with a simple passion for authentic French cooking and a desire to create 
              an intimate dining experience that transports guests to the streets of Paris.
            </p>
            <p className="text-muted-foreground">
              Chef Michel Dupont, trained in Paris under renowned masters, leads our culinary team with 
              a commitment to traditional techniques and seasonal ingredients. Each dish tells a story of 
              France's rich culinary heritage while embracing local, sustainable produce.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-serif mb-3">Visit Us</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-muted-foreground">123 Gourmet Avenue, Culinary District</p>
              </div>
              <div>
                <h4 className="font-medium">Hours</h4>
                <p className="text-muted-foreground">Mon-Thurs: 11am - 10pm</p>
                <p className="text-muted-foreground">Fri-Sat: 11am - 11pm</p>
                <p className="text-muted-foreground">Sunday: 10am - 9pm</p>
              </div>
              <div>
                <h4 className="font-medium">Contact</h4>
                <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                <p className="text-muted-foreground">Email: info@lebistro.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Clock className="h-12 w-12 text-restaurant-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">Est. 2010</h3>
              <p className="text-muted-foreground">
                Over a decade of culinary excellence and memorable dining experiences
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-restaurant-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">Award Winning</h3>
              <p className="text-muted-foreground">
                Recognized for our authentic French cuisine and exceptional service
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-restaurant-burgundy" />
              </div>
              <h3 className="text-xl font-medium mb-2">Community First</h3>
              <p className="text-muted-foreground">
                Supporting local producers and sustainable practices in everything we do
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <TeamMember 
              name="Michel Dupont" 
              role="Executive Chef"
              bio="Trained in Paris, Michel brings 20 years of culinary expertise to every dish."
            />
            <TeamMember 
              name="Sophie Martin" 
              role="Pastry Chef"
              bio="A master of French desserts with a creative twist on traditional favorites."
            />
            <TeamMember 
              name="Jean Petit" 
              role="Sommelier"
              bio="Expert in French wines with a talent for perfect food and wine pairings."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMember({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="text-center p-4">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
      <h3 className="font-medium text-lg">{name}</h3>
      <p className="text-restaurant-burgundy mb-2">{role}</p>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </div>
  );
}
