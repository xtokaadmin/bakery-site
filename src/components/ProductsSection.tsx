import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { products } from "@/data/products"; // Adjust the import path as necessary

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ProductsSectionProps {
  filterCategory?: string;
  showTabs?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  filterCategory = "all",
  showTabs = true,
}) => {
  const [activeCategory, setActiveCategory] = useState(() => filterCategory);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const { addToCart } = useCart();

  const filteredProducts = showTabs
    ? activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory)
    : products.filter((product) => product.category === filterCategory);

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: String(product.id),
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };

    addToCart(cartItem);
    setAddedToCart(product.id);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-800">
            Unsere Empfohlenen Produkte
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Entdecken Sie unsere handgefertigte Auswahl an frisch gebackenen Leckereien, die mit den besten Zutaten und traditionellen Techniken hergestellt werden.
          </p>
        </div>

        {showTabs && (
          <Tabs defaultValue={filterCategory} className="mb-8">
            <div className="flex justify-center">
              <TabsList className="bg-grey">
                <TabsTrigger value="all" onClick={() => setActiveCategory("all")} className="px-6">
                  Alle
                </TabsTrigger>
                <TabsTrigger value="pastry" onClick={() => setActiveCategory("pastry")} className="px-6">
                  Gebäck
                </TabsTrigger>
                <TabsTrigger value="dessert" onClick={() => setActiveCategory("dessert")} className="px-6">
                  Desserts
                </TabsTrigger>
                <TabsTrigger value="gluten-free" onClick={() => setActiveCategory("gluten-free")} className="px-6">
                  Gluten-Free
                </TabsTrigger>
                <TabsTrigger value="seasonal" onClick={() => setActiveCategory("seasonal")} className="px-6">
                  Seasonale
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        )}

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

                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-medium text-lg">{product.name}</h3>
                        <p className="text-white text-sm">CH{product.price.toFixed(2)}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full p-2 h-9 w-9"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-full p-2 h-9 w-9"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-emerald-500 hover:bg-emerald-600">Neu</Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge className="bg-amber-500 hover:bg-amber-600">Bestseller</Badge>
                    )}
                  </div>

                  {addedToCart === product.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-3 right-3 bg-green-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Hinzugefügt zum Warenkorb!
                    </motion.div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-neutral-600">CH{product.price.toFixed(2)}</p>
                    <Button
                      className="py-1 px-3 bg-[#e40062] hover:bg-[#ff529b] "
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                    >
                      Kaufen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;