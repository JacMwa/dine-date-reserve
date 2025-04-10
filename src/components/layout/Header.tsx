
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-serif font-bold text-restaurant-burgundy">Le Bistro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-restaurant-burgundy transition">
              Home
            </Link>
            <Link to="/menu" className="text-foreground hover:text-restaurant-burgundy transition">
              Menu
            </Link>
            <Link to="/about" className="text-foreground hover:text-restaurant-burgundy transition">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-restaurant-burgundy transition">
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/reservations" className="text-foreground hover:text-restaurant-burgundy transition">
                  Reservations
                </Link>
                <Link to="/dashboard" className="text-foreground hover:text-restaurant-burgundy transition">
                  Dashboard
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={logout}
                  className="text-foreground hover:text-restaurant-burgundy transition"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                <Link to="/login">Sign In</Link>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-restaurant-burgundy transition py-2">
              Home
            </Link>
            <Link to="/menu" className="text-foreground hover:text-restaurant-burgundy transition py-2">
              Menu
            </Link>
            <Link to="/about" className="text-foreground hover:text-restaurant-burgundy transition py-2">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-restaurant-burgundy transition py-2">
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/reservations" className="text-foreground hover:text-restaurant-burgundy transition py-2">
                  Reservations
                </Link>
                <Link to="/dashboard" className="text-foreground hover:text-restaurant-burgundy transition py-2">
                  Dashboard
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={logout}
                  className="text-foreground hover:text-restaurant-burgundy transition justify-start p-0"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 w-full">
                <Link to="/login">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
