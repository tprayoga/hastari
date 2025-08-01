import React from "react";
import { Building, Phone, Mail, MapPin } from "lucide-react";
import logo from "./logo.png"; // Adjust the path to your logo image
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-15 w-40" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/entities" className="text-gray-300 hover:text-white transition-colors">
                  Entitas
                </a>
              </li>
              <li>
                <a href="/media" className="text-gray-300 hover:text-white transition-colors">
                  Media & Informasi
                </a>
              </li>
              <li>
                <a href="/career" className="text-gray-300 hover:text-white transition-colors">
                  Karir
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Teknologi Informasi</span>
              </li>
              <li>
                <span className="text-gray-300">Konstruksi</span>
              </li>
              <li>
                <span className="text-gray-300">Energi Terbarukan</span>
              </li>
              <li>
                <span className="text-gray-300">Konsultasi Bisnis</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-300">Jl. Sudirman No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-300">info@indonesia-maju.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-2 pt-2 text-center">
          <p className="text-gray-400">© 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
