import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

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
  limit?: number;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  filterCategory = "all",
  showTabs = true,
  limit,
  title = "Unsere Empfohlenen Produkte",
  subtitle = "Entdecken Sie unsere handgefertigte Auswahl an frisch gebackenen Leckereien, die mit den besten Zutaten und traditionellen Techniken hergestellt werden.",
  backgroundColor = "bg-gray-50"
}) => {
  const [activeCategory, setActiveCategory] = useState(filterCategory);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const { addToCart } = useCart();

  const getFilteredProducts = () => {
    let filtered = products;

    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory);
    }

    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

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

    setTimeout(() => setAddedToCart(null), 2000);
  };

  const categoryLabels = {
    all: "Alle",
    pastry: "Gebäck",
    dessert: "Desserts",
    "gluten-free": "Gluten-Free",
    seasonal: "Seasonale",
  };

  const getCategoryPath = (category: string): string => {
    switch (category) {
      case "pastry":
        return "/products/pastries";
      case "dessert":
        return "/products/cakes";
      case "gluten-free":
        return "/products/glutenfree";
      case "seasonal":
        return "/products/seasonal";
      default:
        return "/shop";
    }
  };

  return (
    <section className={`w-full py-12 ${backgroundColor}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {showTabs && (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-neutral-800">
              {title}
            </h2>
            {subtitle && (
              <p className="text-neutral-600 max-w-2xl mx-auto text-sm md:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {showTabs && (
          <Tabs defaultValue={filterCategory} value={activeCategory} className="mb-8">
            <div className="flex justify-center">
              <TabsList className="bg-white shadow-sm overflow-x-auto max-w-full no-scrollbar flex flex-wrap justify-center">
                {Object.entries(categoryLabels).map(([cat, label]) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="px-4 py-1.5 text-sm whitespace-nowrap"
                    onClick={() => setActiveCategory(cat)}
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-medium text-sm md:text-base">{product.name}</h3>
                        <p className="text-white text-xs md:text-sm">CH{product.price.toFixed(2)}</p>
                      </div>
                      <div className="flex space-x-1.5">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full p-1.5 h-7 w-7"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Heart className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-full p-1.5 h-7 w-7 bg-[#e40062] hover:bg-[#f58f8f]"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                        >
                          <ShoppingCart className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                    {product.isNew && (
                      <Badge className="bg-emerald-500 hover:bg-emerald-600 text-xs px-2 py-0.5">Neu</Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge className="bg-amber-500 hover:bg-amber-600 text-xs px-2 py-0.5">Bestseller</Badge>
                    )}
                  </div>

                  {addedToCart === product.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-0.5 rounded-md text-xs"
                    >
                      In den Warenkorb!
                    </motion.div>
                  )}
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm md:text-base line-clamp-1">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-neutral-600 text-xs md:text-sm">CH{product.price.toFixed(2)}</p>
                    <Button
                      className="py-0.5 px-2 text-xs bg-[#e40062] hover:bg-[#f58f8f]"
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

        {(showTabs || (limit && filteredProducts.length >= limit)) && (
          <div className="text-center mt-8">
            <Link to={showTabs ? "/shop" : getCategoryPath(filterCategory)}>
              <Button 
                variant="outline" 
                className="border-[#e40062] text-[#e40062] hover:bg-[#ffeef5]"
              >
                Alle Produkte anzeigen
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
