import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  // Mock product data
  const products: Product[] = [
    {
      id: 1,
      name: "Sourdough Bread",
      price: 6.99,
      image:
        "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
      category: "bread",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Chocolate Croissant",
      price: 3.99,
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80",
      category: "pastry",
      isNew: true,
    },
    {
      id: 3,
      name: "Strawberry Tart",
      price: 5.49,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
      category: "dessert",
    },
    {
      id: 4,
      name: "Baguette",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&q=80",
      category: "bread",
    },
    {
      id: 5,
      name: "Cinnamon Roll",
      price: 3.49,
      image:
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
      category: "pastry",
      isBestSeller: true,
    },
    {
      id: 6,
      name: "Chocolate Cake",
      price: 28.99,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
      category: "dessert",
      isNew: true,
    },
    {
      id: 7,
      name: "Rye Bread",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
      category: "bread",
    },
    {
      id: 8,
      name: "Macarons",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80",
      category: "dessert",
      isBestSeller: true,
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleAddToCart = (productId: number) => {
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <section className="py-16 px-4 bg-neutral-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-800">
            Our Featured Products
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover our handcrafted selection of freshly baked goods made with
            the finest ingredients and traditional techniques.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList className="bg-neutral-100">
              <TabsTrigger
                value="all"
                onClick={() => setActiveCategory("all")}
                className="px-6"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="bread"
                onClick={() => setActiveCategory("bread")}
                className="px-6"
              >
                Breads
              </TabsTrigger>
              <TabsTrigger
                value="pastry"
                onClick={() => setActiveCategory("pastry")}
                className="px-6"
              >
                Pastries
              </TabsTrigger>
              <TabsTrigger
                value="dessert"
                onClick={() => setActiveCategory("dessert")}
                className="px-6"
              >
                Desserts
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-medium text-lg">
                          {product.name}
                        </h3>
                        <p className="text-white text-sm">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full p-2 h-9 w-9"
                          onClick={(e) => {
                            e.preventDefault();
                            // Wishlist functionality would go here
                          }}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-full p-2 h-9 w-9"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product.id);
                          }}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-emerald-500 hover:bg-emerald-600">
                        New
                      </Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge className="bg-amber-500 hover:bg-amber-600">
                        Best Seller
                      </Badge>
                    )}
                  </div>

                  {/* Added to cart notification */}
                  {addedToCart === product.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-3 right-3 bg-green-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Added to cart!
                    </motion.div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-neutral-600">
                      ${product.price.toFixed(2)}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="px-8 py-6 h-auto text-base" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
