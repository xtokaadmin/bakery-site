import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Add padding to account for fixed header */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kontaktieren Sie uns
            </h1>
            <div className="w-24 h-1 bg-[#e40062] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir würden gerne von Ihnen hören! Ob Sie eine Frage zu unseren
              Produkten haben, eine Sonderbestellung aufgeben möchten oder
              einfach nur Hallo sagen möchten, wir sind hier, um zu helfen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Senden Sie uns eine Nachricht
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Ihr Name"
                      className="bg-white border-[#ff529b]  focus:border-amber-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      E-Mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ihre E-Mail"
                      className="bg-white border-[#ff529b] focus:border-amber-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Betreff
                  </label>
                  <Input
                    id="subject"
                    placeholder="Betreff"
                    className="bg-white border-[#ff529b]  focus:border-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ihre Nachricht"
                    rows={5}
                    className="bg-white border-[#ff529b]  focus:border-amber-500"
                  />
                </div>
                <Button className="w-full bg-[#e40062] hover:bg-[#ff529b] text-white">
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Unsere Informationen
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#e40062] mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Adresse</h3>
                      <p className="text-gray-600 mt-1">
                      Bernstrasse 61
                        <br />
                        4852 Rothrist
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#e40062] mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Telefon</h3>
                      <p className="text-gray-600 mt-1">+41 62 794 10 39</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#e40062] mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">E-Mail</h3>
                      <p className="text-gray-600 mt-1">
                      info@baeckerei-waelchli.ch
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Öffnungszeiten
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Montag - Freitag:</span>
                    <span>6:00 Uhr - 18:30 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samstag:</span>
                    <span>6:00 Uhr - 16:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sonntag:</span>
                    <span>8:00 Uhr - 12:00 Uhr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-stone-50 p-4 rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Street%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1652890633159!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bäckerei Standort"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;