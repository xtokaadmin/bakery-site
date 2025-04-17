
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Frisch gebackene Köstlichkeiten, mit Liebe gemacht",
  subtitle = "Handwerklich hergestellte Brote und Gebäckstücke, gefertigt mit traditionellen Techniken und den besten Zutaten",
  ctaText = "Jetzt einkaufen",
  backgroundImage = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
  onCtaClick = () => (window.location.href = "/shop"),
}: HeroSectionProps) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-amber-50">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl">{subtitle}</p>
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-[#e40062] px-8 py-6 text-lg hover:bg-[#f58f8f]"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
};

export default HeroSection;