
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Utensils, Coffee, Wine, IceCream, ChefHat, Salad, Fish } from "lucide-react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "starters" | "mains" | "desserts" | "drinks";
  image?: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "French Onion Soup",
    description: "Caramelized onions in a rich beef broth with melted gruyère cheese",
    price: "$12.95",
    category: "starters",
    image: "https://images.unsplash.com/photo-1583953498603-2ac99eb957ff?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Escargots de Bourgogne",
    description: "Burgundy snails baked in garlic herb butter",
    price: "$15.95",
    category: "starters",
    image: "https://images.unsplash.com/photo-1627308595260-3833a761da9e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Beef Bourguignon",
    description: "Slow-cooked beef with red wine, mushrooms, and onions",
    price: "$28.95",
    category: "mains",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Coq au Vin",
    description: "Chicken braised with wine, lardons, mushrooms, and garlic",
    price: "$26.95",
    category: "mains",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Crème Brûlée",
    description: "Rich custard topped with caramelized sugar",
    price: "$9.95",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Chocolate Soufflé",
    description: "Light chocolate dessert with a delicate, airy texture",
    price: "$12.95",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1579954115331-d6c9a3a11c67?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Bordeaux Red Wine",
    description: "Glass of premium Bordeaux red wine",
    price: "$14.95",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "French Press Coffee",
    description: "Freshly pressed coffee served with cream",
    price: "$4.95",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1000&auto=format&fit=crop"
  },
  // Adding more dishes
  {
    id: 9,
    name: "Salade Niçoise",
    description: "Fresh tuna, hard-boiled eggs, tomatoes, olives, and anchovies on a bed of lettuce",
    price: "$16.95",
    category: "starters",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Foie Gras",
    description: "Duck liver pâté served with brioche toast and fig compote",
    price: "$18.95",
    category: "starters",
    image: "https://images.unsplash.com/photo-1600891963935-9e9544one8br79?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Ratatouille",
    description: "Traditional Provençal vegetable stew with eggplant, zucchini, bell peppers, and tomatoes",
    price: "$22.95",
    category: "mains",
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Bouillabaisse",
    description: "Mediterranean seafood stew with various fish, shellfish, and aromatic herbs",
    price: "$32.95",
    category: "mains",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Duck Confit",
    description: "Slow-cooked duck leg preserved in its own fat, served with roasted potatoes",
    price: "$29.95",
    category: "mains",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Tarte Tatin",
    description: "Upside-down caramelized apple tart served with vanilla ice cream",
    price: "$10.95",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1560180474-e8563fd75bab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "Mille-feuille",
    description: "Layered puff pastry with vanilla pastry cream and powdered sugar",
    price: "$11.95",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1505976378723-9726886cae55?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "Champagne",
    description: "Glass of premium French champagne",
    price: "$16.95",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1553844007-86c1d756ebc8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 17,
    name: "French Martini",
    description: "Vodka cocktail with raspberry liqueur and pineapple juice",
    price: "$13.95",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1556679343-c1061a8c3d73?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function MenuPage() {
  const starters = menuItems.filter(item => item.category === "starters");
  const mains = menuItems.filter(item => item.category === "mains");
  const desserts = menuItems.filter(item => item.category === "desserts");
  const drinks = menuItems.filter(item => item.category === "drinks");

  return (
    <div className="py-12 px-4 container-custom">
      <div className="max-w-6xl mx-auto">
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
              <Salad className="text-restaurant-burgundy mr-2" />
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
              <ChefHat className="text-restaurant-burgundy mr-2" />
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
      {item.image && (
        <div className="relative w-full h-48">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img 
              src={item.image} 
              alt={item.name}
              className="object-cover w-full h-full rounded-t-lg"
              loading="lazy"
            />
          </AspectRatio>
        </div>
      )}
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
