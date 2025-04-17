
import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import CartPage from "./components/CartPage";
import BreadPage from "./components/BreadPage";
import CakesPage from "./components/CakesPage";
import PasteryPage from "./components/PasteryPage";
import SesionalePage from "./components/SesionalePage";
import BakeryLocations from "./components/BakeryLocation";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CartProvider> {/* Wrap the app in CartProvider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/locations" element={<BakeryLocations />} />
          
          {/* Product Category Routes */}
          <Route path="/products/breads" element={<BreadPage />} />
          <Route path="/products/pastries" element={<PasteryPage />} />
          <Route path="/products/cakes" element={<CakesPage />} />
          <Route path="/products/seasonal" element={<SesionalePage />} />
          <Route path="/products/glutenfree" element={<BreadPage />} />

          
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </CartProvider>
    </Suspense>
  );
}
export default App;