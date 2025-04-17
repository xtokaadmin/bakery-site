import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";
import { MinusCircle, PlusCircle, Trash2, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Label } from "./ui/SimplifiedLabel";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const { cartItems, updateCartItem, removeFromCart, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "creditcard",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 9.9 : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  const incrementQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateCartItem({ ...item, quantity: item.quantity + 1 });
    }
  };

  const decrementQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateCartItem({ ...item, quantity: item.quantity - 1 });
    } else if (item) {
      removeFromCart(id);
    }
  };

  const steps = ["Warenkorb", "Lieferung", "Zahlung", "Bestätigung"];

  // Empty cart view
  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow pt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Ihr Warenkorb</h1>
            <div className="bg-gray-50 rounded-lg p-8 text-center max-w-md mx-auto">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png" 
                alt="Empty cart" 
                className="w-24 h-24 mx-auto mb-4 opacity-30"
              />
              <h2 className="text-xl font-semibold mb-2">Ihr Warenkorb ist leer</h2>
              <p className="text-gray-500 mb-6">Fügen Sie einige leckere Backwaren hinzu!</p>
              <Link to="/shop">
                <Button className="bg-[#e40062] hover:bg-[#f58f8f] px-6">
                  Zum Shop
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Order complete view
  if (orderComplete) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow pt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="max-w-md mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-green-50 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Bestellung abgeschlossen!</h1>
              <p className="text-gray-600 mb-6">
                Vielen Dank für Ihre Bestellung. Eine Bestätigungs-E-Mail wurde an {formData.email} gesendet.
              </p>
              <div className="mb-8 bg-white shadow-sm p-6 rounded-md">
                <h3 className="font-semibold mb-2 text-lg">Bestellübersicht</h3>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Bestellnummer:</span>
                  <span className="font-medium">#BD{Math.floor(Math.random() * 10000)}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Datum:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gesamtbetrag:</span>
                  <span className="font-medium">CHF {total.toFixed(2)}</span>
                </div>
              </div>
              <Link to="/">
                <Button className="bg-[#e40062] hover:bg-[#f58f8f]">
                  Zurück zur Homepage
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          {/* Steps indicator */}
          <div className="mb-8">
            <div className="flex justify-center items-center mb-4">
              {steps.map((step, index) => (
                <React.Fragment key={step}>
                  <div
                    className={`flex flex-col items-center ${
                      index === checkoutStep ? "text-[#e40062]" : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        index <= checkoutStep
                          ? "bg-[#e40062] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="mt-1 text-xs hidden sm:block">{step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 sm:w-24 h-1 mx-1 ${
                        index < checkoutStep ? "bg-[#e40062]" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart or Form */}
            <div className="md:col-span-2">
              <AnimatePresence mode="wait">
                {checkoutStep === 0 && (
                  <motion.div
                    key="cart"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h1 className="text-2xl font-bold mb-6">Ihr Warenkorb</h1>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      {/* Cart Headers */}
                      <div className="hidden md:grid grid-cols-12 p-4 bg-gray-50 border-b border-gray-200 font-medium text-sm text-gray-500">
                        <div className="col-span-6">Produkt</div>
                        <div className="col-span-2 text-center">Preis</div>
                        <div className="col-span-2 text-center">Menge</div>
                        <div className="col-span-2 text-right">Gesamt</div>
                      </div>

                      {/* Cart Items */}
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="grid grid-cols-1 md:grid-cols-12 p-4 border-b border-gray-100 items-center"
                        >
                          <div className="md:col-span-6 flex items-center gap-4 mb-3 md:mb-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <button
                                className="text-[#e40062] text-sm flex items-center mt-1"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="w-3 h-3 mr-1" /> Entfernen
                              </button>
                            </div>
                          </div>

                          <div className="md:col-span-2 flex md:block justify-between md:text-center mb-3 md:mb-0">
                            <span className="text-sm text-gray-500 md:hidden">Preis:</span>
                            <span>CHF {item.price.toFixed(2)}</span>
                          </div>

                          <div className="md:col-span-2 flex md:justify-center items-center mb-3 md:mb-0">
                            <span className="text-sm text-gray-500 md:hidden mr-auto">Menge:</span>
                            <div className="flex items-center">
                              <button
                                className="text-gray-500 hover:text-[#e40062]"
                                onClick={() => decrementQuantity(item.id)}
                              >
                                <MinusCircle className="w-5 h-5" />
                              </button>
                              <span className="mx-3 w-8 text-center">{item.quantity}</span>
                              <button
                                className="text-gray-500 hover:text-[#e40062]"
                                onClick={() => incrementQuantity(item.id)}
                              >
                                <PlusCircle className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          <div className="md:col-span-2 flex justify-between md:justify-end font-medium">
                            <span className="text-sm text-gray-500 md:hidden">Gesamt:</span>
                            <span>CHF {(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-between">
                      <Link to="/shop">
                        <Button variant="outline" className="flex items-center">
                          <ArrowLeft className="w-4 h-4 mr-2" /> Weiter einkaufen
                        </Button>
                      </Link>
                      <Button
                        className="bg-[#e40062] hover:bg-[#f58f8f]"
                        onClick={() => setCheckoutStep(1)}
                      >
                        Zur Kasse
                      </Button>
                    </div>
                  </motion.div>
                )}

                {checkoutStep === 1 && (
                  <motion.div
                    key="delivery"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h1 className="text-2xl font-bold mb-6">Lieferadresse</h1>
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Vorname</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Nachname</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">E-Mail</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="address">Adresse</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">Stadt</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">PLZ</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCheckoutStep(0)}
                        className="flex items-center"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Zurück
                      </Button>
                      <Button
                        className="bg-[#e40062] hover:bg-[#f58f8f]"
                        onClick={() => setCheckoutStep(2)}
                      >
                        Weiter
                      </Button>
                    </div>
                  </motion.div>
                )}

                {checkoutStep === 2 && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h1 className="text-2xl font-bold mb-6">Zahlungsmethode</h1>
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <input
                              type="radio"
                              id="creditcard"
                              name="paymentMethod"
                              value="creditcard"
                              checked={formData.paymentMethod === "creditcard"}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#e40062]"
                            />
                            <Label htmlFor="creditcard">Kreditkarte</Label>
                          </div>

                          {formData.paymentMethod === "creditcard" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                              <div className="md:col-span-2">
                                <Label htmlFor="cardNumber">Kartennummer</Label>
                                <Input
                                  id="cardNumber"
                                  name="cardNumber"
                                  placeholder="1234 5678 9012 3456"
                                  value={formData.cardNumber}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="md:col-span-2">
                                <Label htmlFor="cardName">Name auf der Karte</Label>
                                <Input
                                  id="cardName"
                                  name="cardName"
                                  placeholder="Max Mustermann"
                                  value={formData.cardName}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div>
                                <Label htmlFor="cardExpiry">Gültig bis</Label>
                                <Input
                                  id="cardExpiry"
                                  name="cardExpiry"
                                  placeholder="MM/YY"
                                  value={formData.cardExpiry}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div>
                                <Label htmlFor="cardCVC">CVC</Label>
                                <Input
                                  id="cardCVC"
                                  name="cardCVC"
                                  placeholder="123"
                                  value={formData.cardCVC}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="paypal"
                              name="paymentMethod"
                              value="paypal"
                              checked={formData.paymentMethod === "paypal"}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#e40062]"
                            />
                            <Label htmlFor="paypal">PayPal</Label>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="invoice"
                              name="paymentMethod"
                              value="invoice"
                              checked={formData.paymentMethod === "invoice"}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#e40062]"
                            />
                            <Label htmlFor="invoice">Rechnung</Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCheckoutStep(1)}
                        className="flex items-center"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Zurück
                      </Button>
                      <Button
                        className="bg-[#e40062] hover:bg-[#f58f8f]"
                        onClick={() => setCheckoutStep(3)}
                      >
                        Weiter
                      </Button>
                    </div>
                  </motion.div>
                )}

                {checkoutStep === 3 && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h1 className="text-2xl font-bold mb-6">Bestellübersicht</h1>
                    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                      <div>
                        <h2 className="font-semibold mb-2">Bestellte Artikel</h2>
                        <div className="space-y-2">
                          {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm">
                              <span>
                                {item.name} x {item.quantity}
                              </span>
                              <span>CHF {(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h2 className="font-semibold mb-2">Lieferadresse</h2>
                        <div className="text-sm text-gray-600">
                          <p>
                            {formData.firstName} {formData.lastName}
                          </p>
                          <p>{formData.address}</p>
                          <p>
                            {formData.zipCode} {formData.city}
                          </p>
                          <p>{formData.email}</p>
                          <p>{formData.phone}</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="font-semibold mb-2">Zahlungsmethode</h2>
                        <p className="text-sm text-gray-600">
                          {formData.paymentMethod === "creditcard" && (
                            <>Kreditkarte (**** **** **** {formData.cardNumber.slice(-4)})</>
                          )}
                          {formData.paymentMethod === "paypal" && <>PayPal</>}
                          {formData.paymentMethod === "invoice" && <>Rechnung</>}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCheckoutStep(2)}
                        className="flex items-center"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Zurück
                      </Button>
                      <Button
                        className="bg-[#e40062] hover:bg-[#f58f8f]"
                        onClick={handleSubmitOrder}
                      >
                        Jetzt bestellen
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Zusammenfassung</h2>
                <div className="space-y-2 pb-4 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zwischensumme</span>
                    <span>CHF {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Versand</span>
                    <span>CHF {shipping.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Gesamt</span>
                  <span>CHF {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;