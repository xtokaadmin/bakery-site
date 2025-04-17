import React, { useState } from 'react';
import { Button } from './button';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/Product';

interface CheckoutButtonProps {
  product: Product;
  variant?: 'default' | 'outline' | 'subtle';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export const CheckoutButton = ({
  product,
  variant = 'default',
  size = 'default',
  className = '',
}: CheckoutButtonProps) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Ensure the product has all required properties for CartItem
    const productWithQuantity = {
      ...product,
      quantity: 1, // Set default quantity to 1
      image: product.image || '', // Ensure image is not undefined
    };
    
    addToCart(productWithQuantity);
    setIsAdded(true);
    
    // Reset state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  // Styles based on variant
  let buttonStyle = '';
  
  switch (variant) {
    case 'default':
      buttonStyle = 'bg-[#e40062] hover:bg-[#f58f8f] text-white';
      break;
    case 'outline':
      buttonStyle = 'border border-[#e40062] text-[#e40062] hover:bg-pink-50';
      break;
    case 'subtle':
      buttonStyle = 'bg-pink-50 text-[#e40062] hover:bg-pink-100';
      break;
  }
  
  // Styles based on size
  let sizeStyle = '';
  
  switch (size) {
    case 'sm':
      sizeStyle = 'text-xs py-1 px-2';
      break;
    case 'default':
      sizeStyle = 'text-sm py-2 px-4';
      break;
    case 'lg':
      sizeStyle = 'text-base py-3 px-6';
      break;
  }

  return (
    <Button
      className={`flex items-center transition-all duration-200 ${buttonStyle} ${sizeStyle} ${className}`}
      onClick={handleAddToCart}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Hinzugefügt!
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          In den Warenkorb
        </>
      )}
    </Button>
  );
};

export default CheckoutButton; 