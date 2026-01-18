import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    checkout
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-fade-in border-l border-brand-moss/10">
        
        {/* Header */}
        <div className="p-5 bg-brand-dark text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-brand-yellow" />
            <h2 className="font-serif font-bold text-lg">Your Cart</h2>
            <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
              {cartItems.length} items
            </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center text-brand-moss/50">
                <ShoppingBag size={32} />
              </div>
              <p className="text-neutral-500 font-medium">Your bag is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-brand-moss underline hover:text-brand-dark"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 animate-fade-in">
                <div className="w-20 h-24 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-medium text-brand-dark">{item.name}</h3>
                    <p className="text-xs text-neutral-500">{item.grade || item.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-neutral-200 rounded-full bg-white">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 text-neutral-500 hover:text-brand-dark transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 text-neutral-500 hover:text-brand-dark transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-semibold text-brand-dark text-sm">₹{item.price * item.quantity}</span>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-neutral-400 hover:text-red-500 transition-colors self-start p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-brand-cream/30 border-t border-brand-moss/10">
            <div className="flex justify-between items-center mb-2 text-neutral-500 text-sm">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif font-bold text-xl text-brand-dark">Total</span>
              <span className="font-serif font-bold text-xl text-brand-dark">₹{cartTotal}</span>
            </div>
            
            <button 
              onClick={checkout}
              className="w-full py-4 bg-brand-dark text-white font-bold rounded-lg hover:bg-brand-moss transition-colors shadow-lg shadow-brand-dark/10 flex items-center justify-center gap-2"
            >
              Checkout via Email
            </button>
            <p className="text-center text-[10px] text-neutral-400 mt-3">
              Clicking checkout will open your email client with your order details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;