

import React from "react";
import Navbar from "../components/Header";
import ProductsSection from "./ProductsSection";
import Footer from "./Footer";

const SesionalePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Seasonale</h1>
        <ProductsSection filterCategory="seasonal" showTabs={false} />
      </div>
        <Footer />
    </>
  );
};

export default SesionalePage;