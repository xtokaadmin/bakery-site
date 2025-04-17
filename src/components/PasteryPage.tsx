


import React from "react";
import Navbar from "../components/Header";
import ProductsSection from "./ProductsSection";
import Footer from "./Footer";

const PasteryPage = () => {
  return (
    <div className="bg-[#fdefef] min-h-screen">
      <Navbar />
      <div className="pt-20">
        <h1 className="text-3xl font-bold text-center my-8 text-[#e40062]">Pastry</h1>
        <ProductsSection filterCategory="pastry" showTabs={false} />
      </div>
      <Footer />
    </div>
  );
};

export default PasteryPage;