import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductsSection from "./ProductsSection";

const Shop = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Produkte
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Entdecke unsere Auswahl an frisch gebackenen Köstlichkeiten, die mit den besten Zutaten zubereitet wurden.
            </p>
          </div>

          {/* Use ProductsSection with Tabs enabled */}
          <ProductsSection showTabs={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;