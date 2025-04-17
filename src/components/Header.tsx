import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import logoImg from "@/assets/logo.jpg";


interface HeaderProps {
  logo?: string;
  cartItemCount?: number;
}

const Header = ({ logo = '/logo.jpg' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart(); // Get cart items from context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const productCategories = [
    { name: "Gebäck", path: "/products/pastries" },
    { name: "Desserts", path: "/products/cakes" },
    { name: "Saisonale Produkte", path: "/products/seasonal" },
    { name: "Gluten Free", path: "/products/glutenfree" },
    

  ];

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0); 

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Bäckerei Logo" className="h-12" />
          <span className="ml-2 text-xl font-semibold text-gray-800">
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Startseite
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Über uns
          </Link>

          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
                Produkte <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {productCategories.map((category) => (
                <DropdownMenuItem key={category.name} asChild>
                  <Link to={category.path} className="w-full">
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/shop"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Kontakt
          </Link>
          <Link
            to="/locations"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Locations
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="hidden md:flex items-center">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e40062] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menü umschalten"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={toggleMenu}
            >
              Startseite
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={toggleMenu}
            >
              Über uns
            </Link>

            {/* Mobile Products Dropdown */}  
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">Produkte</p>
              <div className="pl-4 space-y-2">
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/shop"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>

            {/* Mobile Cart Link */}
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-amber-600 transition-colors"
              onClick={toggleMenu}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Warenkorb {cartItemCount > 0 && `(${cartItemCount})`}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;