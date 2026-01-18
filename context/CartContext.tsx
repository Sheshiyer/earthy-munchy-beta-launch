import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  checkout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const checkout = () => {
    const subject = "New Order Request - Earthy Munchy";
    const itemsList = cartItems.map(item => 
      `- ${item.name} (${item.quantity} x ₹${item.price}) = ₹${item.price * item.quantity}`
    ).join('%0D%0A'); // %0D%0A is newline for mailto
    
    const body = `Hello Earthy Munchy,%0D%0A%0D%0AI would like to place an order for the following items:%0D%0A%0D%0A${itemsList}%0D%0A%0D%0ATotal Order Value: ₹${cartTotal}%0D%0A%0D%0AShipping Details:%0D%0AName: [Your Name]%0D%0AAddress: [Your Address]%0D%0APhone: [Your Phone]%0D%0A%0D%0APlease confirm availability and payment details.`;

    window.location.href = `mailto:hello@earthymunchy.com?subject=${subject}&body=${body}`;
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
      checkout
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};