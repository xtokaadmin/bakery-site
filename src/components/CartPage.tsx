

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // Initialize the navigate function

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleContinueShopping = () => {
    navigate('/shop'); // Redirect to the shop page
  };

  return (
    <div className="bg-[#fdefef] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-brown-800 text-center mb-8">Dein Warenkorb</h1>
        
        {cartItems.length === 0 ? (
          <p className="text-lg text-center text-gray-600">Dein Warenkorb ist derzeit leer.</p>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-4 border-b border-amber-300">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <span className="text-xl font-semibold text-brown-800">{item.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-amber-600 hover:text-amber-800"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="text-amber-600 hover:text-amber-800"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-lg text-brown-600">${item.price.toFixed(2)}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemove(item.id)}
                  >
                    Entfernen
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 text-right">
              <span className="text-2xl font-semibold text-brown-800">
                Gesamt: ${total.toFixed(2)}
              </span>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button className="bg-[#e40062] text-white py-2 px-6 rounded-lg text-lg hover:bg-[#ff5ea3] transition-all">
                Zur Kasse gehen
              </button>
              <button
               onClick={handleContinueShopping} // Attach the click handler
               className="bg-gray-200 text-brown-800 py-2 px-6 rounded-lg text-lg hover:bg-gray-300 transition-all">
                Weiter einkaufen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;