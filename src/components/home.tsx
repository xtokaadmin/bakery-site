import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Zitronencakes from "../assets/Zitronencakes.jpg";
import bread from "../assets/bread.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <HeroSection />
        
        {/* Key Features Grid */}
        <section className="w-full py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#fff9f4] p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffe8d6] flex items-center justify-center">
                  <img src={bread} alt="Tradition" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Traditionelles Handwerk</h3>
                <p className="text-gray-600 text-sm">Seit 1986 backen wir mit bewährten Rezepten und traditionellen Methoden.</p>
              </div>
              
              <div className="bg-[#fff9f4] p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffe8d6] flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2447/2447774.png" alt="Zutaten" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Beste Zutaten</h3>
                <p className="text-gray-600 text-sm">Wir verwenden nur frische, lokale und saisonale Zutaten höchster Qualität.</p>
              </div>
              
              <div className="bg-[#fff9f4] p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffe8d6] flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/3800/3800517.png" alt="Filialen" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">15 Filialen</h3>
                <p className="text-gray-600 text-sm">Besuchen Sie uns in einer unserer 15 Filialen im Zürcher Unterland und in Zürich.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <ProductsSection 
          filterCategory="all" 
          showTabs={true} 
          limit={4} 
          title="Unsere Bestseller"
          subtitle="Entdecken Sie unsere beliebtesten Backwaren, frisch für Sie zubereitet"
          backgroundColor="bg-white"
        />
        
        {/* About Us / Story Section (Condensed) */}
        <section className="w-full py-12 bg-[#fdefef]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={Zitronencakes}
                  alt="Bakery interior"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-4">
                <span className="text-[#e40062] font-medium text-sm uppercase tracking-wider">Unsere Geschichte</span>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Tradition seit 1986
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Was als kleine Dorfbäckerei begann, ist heute ein modernes Unternehmen mit 15 Filialen. Trotz Wachstum bleiben wir unseren Werten treu: Qualität, Handwerk und Leidenschaft.
                </p>
                <Button 
                  className="bg-[#e40062] hover:bg-[#f58f8f] text-white mt-2 flex items-center"
                  onClick={() => window.location.href = "/about"}
                >
                  Mehr über uns <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial / Special Offer Banner */}
        <section className="w-full py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-[#fffaf2] p-6 md:p-10 rounded-lg text-center shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Jeden Tag frisch für Sie</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Besuchen Sie uns morgens für das beste Auswahl an knusprigen Broten, duftenden Brötchen und süßen Verführungen.
              </p>
              <Button 
                className="bg-[#e40062] hover:bg-[#f58f8f] text-white px-6 py-2"
                onClick={() => window.location.href = "/locations"}
              >
                Filialen finden
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}