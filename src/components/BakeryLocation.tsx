import React, { useState } from "react";
import Navbar from "../components/Header";
import { bakeries } from "@/data/bakery"; // Import bakery data
import Footer from "./Footer";

const BakeryLocations = () => {
  const [activeTab, setActiveTab] = useState("Alle");

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12 pt-20">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black">Unsere Geschäft</h1>
          <p className="text-xl text-gray-600 mt-4">Finden Sie die nächste Bäckerei</p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            className={`py-2 px-4 rounded-full font-semibold ${
              activeTab === "Alle" ? "bg-[#e40062] text-white" : "bg-white text-[#e40062]"
            } border border-[#e40062]`}
            onClick={() => setActiveTab("Alle")}
          >
            Alle
          </button>

          {Object.keys(bakeries).map((city) => (
            <button
              key={city}
              className={`py-2 px-4 rounded-full font-semibold ${
                activeTab === city ? "bg-[#e40062] text-white" : "bg-white text-[#e40062]"
              } border border-[#e40062]`}
              onClick={() => setActiveTab(city)}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Bakery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "Alle"
            ? Object.values(bakeries).flat()
            : bakeries[activeTab]
          ).map((bakery, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={bakery.img}
                alt={bakery.name}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold text-[#e40062]">{bakery.name}</h2>
              <p className="text-gray-700 mt-2">{bakery.address}</p>
              <div className="mt-4">
                <button className="bg-[#e40062] text-white py-2 px-4 rounded-full hover:bg-[#c30055]">
                  Standort anzeigen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BakeryLocations;
