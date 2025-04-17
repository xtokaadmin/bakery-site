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
            Unsere Geschichte
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            Im Jahr 1986 übernahmen Elsbeth und René Fleischli die Dorfbäckerei Maag in Niederglatt und gründeten die Bäckerei-Conditorei Fleischli AG. Mit viel Hingabe und Leidenschaft 
              sowie einem qualitätsorientierten Konzept haben die beiden während 30 Jahren ein gesundes und dynamisches Unternehmen erschaffen.
               Seit 2021 sind  Chantal und Konrad Pfister die neuen Inhaber des Unternehmens, welches sie bereits seit 2017, damals noch als Mehrheitsaktionäre, führen. Sie treiben die Weiterentwicklung gemeinsam mit rund 300 Mitarbeitenden in 15 Filialen im Zürcher Unterland und in Zürich voran.
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
              Handwerkliche Exzellenz
              </h3>
              <p className="text-gray-600">
              Unsere Meisterbäcker vereinen traditionelle Techniken mit innovativen Ansätzen, um einzigartige Aromen und Texturen zu schaffen. Wann immer möglich, verwenden wir biologische, lokal angebaute Zutaten, um unsere Gemeinschaft zu unterstützen und höchste Qualität zu gewährleisten.
              </p>
              <p className="text-gray-600">
              Von knusprigen Sauerteigbroten bis hin zu zarten französischen Gebäcken 
              – jede Kreation spiegelt unsere Leidenschaft für das Bäckerhandwerk und unser Engagement wider, 
              unseren Kunden außergewöhnliche Backwaren zu bieten..
              </p>
              <button className="mt-4 px-6 py-2 bg-[#e40062] text-white rounded-md hover:bg-[#f58f8f] transition-colors">
              Mehr Erfahren
              </button>
            </div>
          </div>
        </section>

        <ProductsSection filterCategory="all" showTabs={true} limit={3} />
      </main>
      <Footer />
    </div>
  );
}