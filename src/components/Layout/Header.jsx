import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Entitas", path: "/entities" },
    { name: "Media & Informasi", path: "/media" },
    { name: "Karir", path: "/career" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <header className="bg-red-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">PT Indonesia Maju</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} className={`text-white hover:text-white transition-colors duration-200 font-medium ${location.pathname === item.path ? "text-white border-b-2 border-white" : ""}`}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-red-300 hover:text-white transition-colors duration-200 ${location.pathname === item.path ? "text-red-600 font-medium" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
