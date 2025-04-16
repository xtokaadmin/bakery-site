import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="pt-20">
        {" "}
        {/* Add padding to account for fixed header */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the passion and tradition behind our artisanal bakery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Humble Beginnings
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, Artisan Bakery began as a small family
                operation with a simple mission: to create authentic,
                handcrafted bread using traditional methods and the finest
                ingredients.
              </p>
              <p className="text-gray-600">
                What started as a passion project in a tiny kitchen has grown
                into a beloved local institution, but our commitment to quality
                and craftsmanship remains unchanged. Every loaf, pastry, and
                sweet treat is made with the same care and attention to detail
                as when we first opened our doors.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80"
                alt="Baker working with dough"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80"
                alt="Our bakery interior"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Philosophy
              </h2>
              <p className="text-gray-600 mb-4">
                We believe that great baking is a perfect balance of science and
                art. Our bakers combine precise techniques with creative flair
                to produce baked goods that not only taste exceptional but also
                tell a story.
              </p>
              <p className="text-gray-600">
                We're committed to sourcing locally whenever possible,
                supporting our community's farmers and producers while ensuring
                the freshest ingredients for our customers. Sustainability isn't
                just a buzzword for us—it's a core value that guides our
                decisions.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=baker1"
                    alt="Head Baker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Emma Thompson
                </h3>
                <p className="text-amber-700">Head Baker</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=baker2"
                    alt="Pastry Chef"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Michael Chen
                </h3>
                <p className="text-amber-700">Pastry Chef</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=baker3"
                    alt="Store Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sarah Johnson
                </h3>
                <p className="text-amber-700">Store Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
