import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdefef] text-stone-800">
      <div className="py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kontaktinformation */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h3>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-[#e40062]" />
                <p className="text-sm md:text-base">Bernstrasse 61, 4852 Rothrist</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#e40062]" />
                <p className="text-sm md:text-base">+41 62 794 10 39</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#e40062]" />
                <p className="text-sm md:text-base">info@baeckerei-waelchli.ch</p>
              </div>
              <div className="pt-2">
                <h4 className="text-sm font-medium mb-2">Öffnungszeiten</h4>
                <p className="text-xs md:text-sm">Montag - Freitag: 06:00 - 18:30</p>
                <p className="text-xs md:text-sm">Samstag: 6:00 - 16:00</p>
                <p className="text-xs md:text-sm">Sonntag: 8:00 - 12:00</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Verbinden Sie sich mit uns</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e40062] hover:bg-[#f58f8f] text-white p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e40062] hover:bg-[#f58f8f] text-white p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e40062] hover:bg-[#f58f8f] text-white p-2 rounded-full transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <div className="pt-4">
                <p className="text-xs md:text-sm">
                  Folgen Sie uns für Updates, Sonderangebote und Einblicke in unsere Bäckerei!
                </p>
              </div>
            </div>

            {/* Newsletter Anmeldung */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-xs md:text-sm">
                Abonnieren Sie unseren Newsletter für Rezepte, Aktionen und Neuigkeiten aus der Bäckerei.
              </p>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="bg-white border-amber-200 focus:border-amber-500"
                />
                <Button className="bg-[#e40062] hover:bg-[#f58f8f] text-white">
                  Abonnieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-stone-200 py-4 bg-[#fde5e5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Artisan Bakery. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;