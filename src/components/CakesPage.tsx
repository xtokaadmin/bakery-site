

import React from "react";
import Navbar from "../components/Header";
import ProductsSection from "./ProductsSection";

const CakesPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Pastry</h1>
        <ProductsSection filterCategory="dessert" showTabs={false} />
      </div>
    </>
  );
};

export default CakesPage;