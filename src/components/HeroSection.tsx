import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  ctaText = "Jetzt entdecken",
  backgroundImage = "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1200&q=80",
  onCtaClick = () => (window.location.href = "/shop"),
}: HeroSectionProps) => {
  return (
    <div className="relative h-[70vh] max-h-[650px] min-h-[500px] w-full overflow-hidden bg-amber-50">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center px-4 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl max-w-lg">
            {subtitle}
          </p>
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-[#e40062] px-8 py-6 text-lg hover:bg-[#f58f8f] flex items-center"
          >
            {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
};

export default HeroSection;