import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const Shop = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Sourdough Bread",
      price: 6.99,
      image:
        "https://images.unsplash.com/photo-1585478259715-1c195a3c6522?w=600&q=80",
      category: "breads",
    },
    {
      id: 2,
      name: "Chocolate Croissant",
      price: 3.99,
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80",
      category: "pastries",
    },
    {
      id: 3,
      name: "Baguette",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1597079910443-60c43fc5b7b3?w=600&q=80",
      category: "breads",
    },
    {
      id: 4,
      name: "Cinnamon Roll",
      price: 3.49,
      image:
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
      category: "pastries",
    },
    {
      id: 5,
      name: "Artisan Rye Bread",
      price: 7.99,
      image:
        "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&q=80",
      category: "breads",
    },
    {
      id: 6,
      name: "Blueberry Muffin",
      price: 2.99,
      image:
        "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
      category: "pastries",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="pt-20">
        {" "}
        {/* Add padding to account for fixed header */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our selection of freshly baked goods made with the finest
              ingredients
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className="bg-amber-600 text-white hover:bg-amber-700"
            >
              All Products
            </Button>
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              Breads
            </Button>
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              Pastries
            </Button>
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              Cakes
            </Button>
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              Cookies
            </Button>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
