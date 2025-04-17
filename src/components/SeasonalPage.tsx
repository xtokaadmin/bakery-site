import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductsSection from "./ProductsSection";

const SeasonalPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <section className="w-full py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center my-6 text-[#e40062]">
              Saisonale Produkte
            </h1>
            <div className="mb-4 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base text-justify sm:text-center">
                Entdecken Sie unsere saisonalen Kreationen, die mit frischen Zutaten der Saison hergestellt werden und nur für begrenzte Zeit verfügbar sind.
              </p>
            </div>
          </div>
        </section>
        
        <ProductsSection filterCategory="seasonal" showTabs={false} />
      </main>
      <Footer />
    </div>
  );
};

export default SeasonalPage; 