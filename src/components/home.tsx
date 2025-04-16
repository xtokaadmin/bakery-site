import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Founded in 2005, our bakery has been crafting artisanal breads and
              pastries using traditional methods and the finest ingredients.
              Every item is made with love and attention to detail, ensuring a
              delightful experience with every bite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Bakery interior"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-gray-800">
                Artisanal Excellence
              </h3>
              <p className="text-gray-600">
                Our master bakers combine time-honored techniques with
                innovative approaches to create unique flavors and textures. We
                source organic, locally-grown ingredients whenever possible to
                support our community and ensure the highest quality products.
              </p>
              <p className="text-gray-600">
                From crusty sourdough loaves to delicate French pastries, each
                creation reflects our passion for the craft of baking and our
                commitment to providing our customers with exceptional baked
                goods.
              </p>
              <button className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <ProductsSection />

        <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The sourdough bread is absolutely amazing! I've never tasted anything like it. It's now a weekly staple in our home.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    text: "Their croissants are as good as the ones I've had in Paris. Perfectly flaky and buttery. Highly recommend!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Emma Rodriguez",
    text: "I ordered a custom cake for my daughter's birthday and it exceeded all expectations. Not only was it beautiful, but it tasted incredible too!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];
