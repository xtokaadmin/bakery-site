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
    <footer className="bg-stone-100 text-stone-800 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-0.5 text-amber-700" />
              <p>123 Bakery Street, Flour City, FC 12345</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-amber-700" />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-amber-700" />
              <p>hello@artisanbakery.com</p>
            </div>
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">Hours</h4>
              <p className="text-sm">Monday - Friday: 7am - 7pm</p>
              <p className="text-sm">Saturday - Sunday: 8am - 5pm</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 text-white p-2 rounded-full hover:bg-amber-800 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 text-white p-2 rounded-full hover:bg-amber-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 text-white p-2 rounded-full hover:bg-amber-800 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm">
                Follow us for updates, special offers, and behind-the-scenes
                content from our bakery!
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm">
              Subscribe to our newsletter for recipes, promotions, and bakery
              news.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-amber-200 focus:border-amber-500"
              />
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-200 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Artisan Bakery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
