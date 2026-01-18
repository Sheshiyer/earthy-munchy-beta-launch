import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Globe } from 'lucide-react';
import { products, honeyVarieties } from '../data';

const Home: React.FC = () => {
  const featuredSpices = products.filter(p => p.category === 'spice').slice(0, 3);
  const honeyVault = products.find(p => p.category === 'set');

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-cream">
          {/* Desktop Video */}
          <video
            className="hidden md:block w-full h-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/img/newproductshots/story-hero-terroir.png"
            aria-label="Atmospheric mist rolling over lush spice gardens"
          >
            <source src="/img/newproductshots/hero-mist-desktop.mp4" type="video/mp4" />
            <img 
              src="/img/newproductshots/story-hero-terroir.png" 
              alt="Spices Hero Fallback" 
              className="w-full h-full object-cover opacity-90"
            />
          </video>

          {/* Mobile Video */}
          <video
            className="block md:hidden w-full h-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/img/newproductshots/story-hero-terroir.png"
            aria-label="Atmospheric mist rolling over lush spice gardens"
          >
            <source src="/img/newproductshots/hero-mist-mobile.mp4" type="video/mp4" />
            <img 
              src="/img/newproductshots/story-hero-terroir.png" 
              alt="Spices Hero Fallback" 
              className="w-full h-full object-cover opacity-90"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/90 via-brand-cream/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-moss/10 border border-brand-moss/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-moss"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-moss">Est. 2025 • Sri Lanka & India</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-brand-dark mb-6 leading-tight">
              From Native Roots <br/>
              <span className="text-brand-moss italic">to Global Hearts.</span>
            </h1>
            
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-md">
              Curated native ingredients from their authentic origins, shared in their most honest form. Hand-picked Ceylon Cinnamon and Pure Wild Honey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="px-8 py-4 bg-brand-dark text-white text-sm font-semibold tracking-wide rounded-full hover:bg-brand-moss transition-all hover:-translate-y-1 shadow-lg shadow-brand-dark/20">
                Shop Collection
              </Link>
              <Link to="/story" className="px-8 py-4 bg-white border border-brand-dark/20 text-brand-dark text-sm font-semibold tracking-wide rounded-full hover:bg-neutral-50 transition-all flex items-center gap-2 group">
                Our Story 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Values Section */}
      <section className="py-24 bg-white border-b border-brand-moss/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-moss mb-2">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Origin</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                It begins at the source. We travel to farms in Sri Lanka and forests in India to bring you native goodness.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-moss mb-2">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Wild</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Nature has no recipe. Our honey is gathered from wild blossoms, free from shortcuts and artificial intervention.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-moss mb-2">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Craft</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                 We work with artisans who use time-honoured methods, harvesting with care and respecting the land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spices */}
      <section className="py-24 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-brand-copper uppercase tracking-widest">Native Sri Lankan</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-medium text-brand-dark mt-2">True Ceylon Spices</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-moss hover:text-brand-dark transition-colors border-b border-brand-moss/20 pb-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSpices.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.tags.includes('Best Seller') && (
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-dark rounded-sm">
                        Best Seller
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-serif font-medium text-brand-dark group-hover:text-brand-moss transition-colors">{product.name}</h3>
                        <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">{product.grade}</p>
                      </div>
                      <span className="font-medium text-brand-dark">₹{product.price}</span>
                    </div>
                    <p className="text-sm text-neutral-500 line-clamp-2 mt-3">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Honey Feature */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
                <video 
                  src="/img/newproductshots/honey-video-primary.mp4" 
                  poster="/img/newproductshots/texture-honey-drop.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl rounded-2xl"
                />
            </div>
            <div className="order-1 lg:order-2">
                <span className="text-xs font-bold text-brand-copper uppercase tracking-widest">The Honey Vault</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-medium text-brand-dark mt-4 mb-6">
                    A Curated Journey Through Nature.
                </h2>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                    Thousands of wild blossoms across India—each kissed by the sun. Earthy Munchy partners with ethical beekeepers to craft pure, unblended honey from diverse floral landscapes.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    {honeyVarieties.map((honey, index) => (
                      <div key={index} className="bg-brand-cream/50 p-4 rounded-lg">
                          <span className="block text-brand-dark font-serif font-bold mb-1">{honey.name.replace(' Honey', '')}</span>
                          <span className="text-xs text-neutral-500">{honey.desc.split(',')[0]}</span>
                      </div>
                    ))}
                </div>
                <Link to={`/product/${honeyVault?.id}`} className="inline-block px-8 py-3 bg-brand-dark text-white text-sm font-semibold rounded-full hover:bg-brand-moss transition-colors">
                    Explore The Vault
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-md mx-auto px-6 text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">Join the community</h2>
            <p className="text-white/60 text-sm mb-8">Sign up for early access to new drops and exclusive authentic recipes.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="email@address.com" 
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 text-white placeholder:text-white/40"
                />
                <button className="px-6 py-3 bg-white text-brand-dark text-sm font-bold rounded-lg hover:bg-brand-cream transition-colors">
                    Subscribe
                </button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Home;