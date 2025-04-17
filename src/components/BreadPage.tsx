


import React from "react";
import Navbar from "../components/Header";
import ProductsSection from "./ProductsSection";

const BreadPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Gluten Free</h1>
        <ProductsSection filterCategory="gluten-free" showTabs={false} />
      </div>
    </>
  );
};

export default BreadPage;