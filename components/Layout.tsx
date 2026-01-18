import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, Sparkles, X, Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';
import AIChef from './AIChef';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAIChefOpen, setIsAIChefOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        location.pathname === '/' ? 'bg-white/80 backdrop-blur-md' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center lg:items-start group" onClick={closeMobileMenu}>
            <span className="text-xl lg:text-2xl font-serif font-bold tracking-tighter text-brand-dark group-hover:text-brand-moss transition-colors">
              EARTHY MUNCHY
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className="text-sm font-medium text-neutral-600 hover:text-brand-moss tracking-wide transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-neutral-600 hover:text-brand-moss tracking-wide transition-colors">Shop</Link>
            <Link to="/story" className="text-sm font-medium text-neutral-600 hover:text-brand-moss tracking-wide transition-colors">Story</Link>
            <Link to="/contact" className="text-sm font-medium text-neutral-600 hover:text-brand-moss tracking-wide transition-colors">Contact</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsAIChefOpen(true)}
              className="hidden md:flex items-center gap-2 bg-brand-cream text-brand-moss px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-brand-moss hover:text-white transition-all border border-brand-moss/20"
            >
              <Sparkles size={14} />
              AI Chef
            </button>
            <button className="relative p-2 text-brand-dark hover:bg-neutral-100 rounded-full transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-copper rounded-full ring-2 ring-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-neutral-100 shadow-xl lg:hidden p-6 animate-slide-up origin-top">
            <div className="flex flex-col gap-6">
              <Link to="/" onClick={closeMobileMenu} className="text-2xl font-serif text-brand-dark">Home</Link>
              <Link to="/shop" onClick={closeMobileMenu} className="text-2xl font-serif text-brand-dark">Shop</Link>
              <Link to="/story" onClick={closeMobileMenu} className="text-2xl font-serif text-brand-dark">Our Story</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-2xl font-serif text-brand-dark">Contact</Link>
              <button 
                onClick={() => {
                    closeMobileMenu();
                    setIsAIChefOpen(true);
                }}
                className="flex items-center gap-2 text-brand-moss font-medium mt-4"
              >
                <Sparkles size={18} /> Ask AI Chef
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      <AIChef isOpen={isAIChefOpen} onClose={() => setIsAIChefOpen(false)} />

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-serif text-lg mb-6">Earthy Munchy</h4>
              <p className="text-brand-cream/60 text-sm leading-relaxed mb-6">
                From native roots to global hearts. Curating the finest authentic ingredients from their origins.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Twitter size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-6">Shop</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/shop" className="hover:text-white transition-colors">Ceylon Cinnamon</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">True Cloves</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">The Honey Vault</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">Gift Sets</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2"><Phone size={14} /> +91 8025470681</li>
                <li className="flex items-center gap-2"><Mail size={14} /> hello@earthymunchy.com</li>
                <li className="opacity-60 text-xs mt-2 leading-relaxed">
                   Marketed by Mercury Inc.<br/>
                   Bangalore, India 560084
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© 2025 Earthy Munchy. All rights reserved.</p>
            <p>Made with nature's intent.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;