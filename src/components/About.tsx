
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4"> Unsere Geschichte</h1>
            <div className="w-24 h-1 bg-[#e40062] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Im langjährigen Einsatz für unsere Region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Unsere bescheidenen Anfänge
              </h2>
              <p className="text-gray-600 mb-4">
              Im Jahr 1986 übernahmen Elsbeth und René Fleischli die Dorfbäckerei Maag in Niederglatt und gründeten die Bäckerei-Conditorei Fleischli AG. Mit viel Hingabe und Leidenschaft 
              sowie einem qualitätsorientierten Konzept haben die beiden während 30 Jahren ein gesundes und dynamisches Unternehmen erschaffen.
               Seit 2021 sind  Chantal und Konrad Pfister die neuen Inhaber des Unternehmens, welches sie bereits seit 2017, damals noch als Mehrheitsaktionäre, führen. Sie treiben die Weiterentwicklung gemeinsam mit rund 300 Mitarbeitenden in 15 Filialen im Zürcher Unterland und in Zürich voran.
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
              Unsere Philosophie
              </h2>
              <p className="text-gray-600 mb-4">
                Wir glauben, dass großartiges Backen die perfekte Balance zwischen Wissenschaft und Kunst ist. Unsere Bäcker verbinden präzise Techniken mit kreativem Gespür, 
                um Backwaren zu schaffen, die nicht nur außergewöhnlich schmecken, sondern auch eine Geschichte erzählen.
              </p>
              <p className="text-gray-600">
              Wir setzen uns dafür ein, wann immer möglich lokal einzukaufen – um die Landwirte und Produzenten unserer Region zu unterstützen und gleichzeitig unseren Kunden die frischesten Zutaten zu bieten. Nachhaltigkeit ist für uns kein Modewort – sie ist ein zentraler Wert, der unsere Entscheidungen leitet.


              </p>
            </div>
          </div>

   
        </div>
      </div>
      <div className="border-t border-gray-300 mx-4 md:mx-8 lg:mx-20 my-8"></div>
      <Footer />
    </div>
  );
};

export default About;