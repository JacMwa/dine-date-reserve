
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Coffee, Wine, IceCream } from "lucide-react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "starters" | "mains" | "desserts" | "drinks";
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "French Onion Soup",
    description: "Caramelized onions in a rich beef broth with melted gruyère cheese",
    price: "$12.95",
    category: "starters"
  },
  {
    id: 2,
    name: "Escargots de Bourgogne",
    description: "Burgundy snails baked in garlic herb butter",
    price: "$15.95",
    category: "starters"
  },
  {
    id: 3,
    name: "Beef Bourguignon",
    description: "Slow-cooked beef with red wine, mushrooms, and onions",
    price: "$28.95",
    category: "mains"
  },
  {
    id: 4,
    name: "Coq au Vin",
    description: "Chicken braised with wine, lardons, mushrooms, and garlic",
    price: "$26.95",
    category: "mains"
  },
  {
    id: 5,
    name: "Crème Brûlée",
    description: "Rich custard topped with caramelized sugar",
    price: "$9.95",
    category: "desserts"
  },
  {
    id: 6,
    name: "Chocolate Soufflé",
    description: "Light chocolate dessert with a delicate, airy texture",
    price: "$12.95",
    category: "desserts"
  },
  {
    id: 7,
    name: "Bordeaux Red Wine",
    description: "Glass of premium Bordeaux red wine",
    price: "$14.95",
    category: "drinks"
  },
  {
    id: 8,
    name: "French Press Coffee",
    description: "Freshly pressed coffee served with cream",
    price: "$4.95",
    category: "drinks"
  }
];

export default function MenuPage() {
  const starters = menuItems.filter(item => item.category === "starters");
  const mains = menuItems.filter(item => item.category === "mains");
  const desserts = menuItems.filter(item => item.category === "desserts");
  const drinks = menuItems.filter(item => item.category === "drinks");

  return (
    <div className="py-12 px-4 container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Our Menu</h1>
          <p className="text-muted-foreground">
            Savor the flavors of France with our carefully curated selection of authentic dishes.
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-10">
          {/* Starters */}
          <section>
            <div className="flex items-center mb-6">
              <Utensils className="text-restaurant-burgundy mr-2" />
              <h2 className="text-2xl font-serif">Starters</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {starters.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Mains */}
          <section>
            <div className="flex items-center mb-6">
              <Utensils className="text-restaurant-burgundy mr-2" />
              <h2 className="text-2xl font-serif">Main Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mains.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Desserts */}
          <section>
            <div className="flex items-center mb-6">
              <IceCream className="text-restaurant-burgundy mr-2" />
              <h2 className="text-2xl font-serif">Desserts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {desserts.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Drinks */}
          <section>
            <div className="flex items-center mb-6">
              <Wine className="text-restaurant-burgundy mr-2" />
              <h2 className="text-2xl font-serif">Drinks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drinks.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{item.name}</CardTitle>
          <span className="text-restaurant-burgundy font-medium">{item.price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}
