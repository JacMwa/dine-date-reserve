
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-restaurant-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Le Bistro</h3>
            <p className="text-gray-300 mb-4">
              Experience exquisite dining in an elegant atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-restaurant-gold transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-gold transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-gold transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 11am - 10pm</li>
              <li>Saturday: 10am - 11pm</li>
              <li>Sunday: 10am - 9pm</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Gourmet Street</li>
              <li>Culinary City, CC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@lebistro.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-restaurant-gold transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-restaurant-gold transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-restaurant-gold transition">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-restaurant-gold transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-restaurant-gold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Le Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
