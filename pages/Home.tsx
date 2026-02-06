import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Globe } from 'lucide-react';
import { products, honeyVarieties } from '../data';
import SEO from '../components/SEO';
import { generateWebSiteSchema } from '../utils/ai-seo';

const Home: React.FC = () => {
  const websiteSchema = generateWebSiteSchema();
  const featuredSpices = products.filter(p => ['cinnamon-c5', 'cloves-g1', 'cinnamon-powder'].includes(p.id));
  const honeyVault = products.find(p => p.category === 'set');

  // Optimize video loading to prevent double downloads/aborts
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkMobile();

    // Listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="animate-fade-in">
      <SEO
        title="Earthy Munchy | Premium Naturally Sourced Spices & Honey"
        description="Buy authentic Ceylon Cinnamon C5 & wild honey from Sri Lanka. Premium hand-picked spices delivered fresh. Shop naturally sourced ingredients today!"
        image="/img/og/og-home.png"
        schema={websiteSchema}
      />
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
              <span className="text-xs font-bold uppercase tracking-wider text-brand-moss">Est 2025 • Sri Lanka</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-brand-dark mb-6 leading-tight">
              From Native Roots <br />
              <span className="text-brand-moss italic">to Global Hearts.</span>
            </h1>

            <p className="text-xl font-serif text-neutral-600 mb-10 leading-relaxed max-w-md italic">
              Curated Native Ingredients from authentic origins, in their most honest form. Hand-picked Ceylon Cinnamon, Cloves & Pure Wild Honey.
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

      {/* Values Section - Origin, Wild, Craft */}
      <section className="py-32 bg-gradient-to-b from-white via-brand-cream/20 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-brand-copper uppercase tracking-[0.3em]">Our Philosophy</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-brand-dark mt-4">
              Rooted in Purpose
            </h2>
          </div>

          {/* Origin - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
            {/* Decorative blur */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-moss/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/newproductshots/story-hero-terroir.png"
                  alt="Native farmlands and origins"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-brand-cream">
                <Globe size={32} className="text-brand-moss" />
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <span className="inline-block text-xs font-bold text-brand-copper uppercase tracking-widest">01</span>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark">Origin</h3>
              <div className="text-neutral-600 leading-relaxed space-y-4 text-lg">
                <p>
                  Earthy Munchy was born from a love for native foods and the stories behind them. Inspired by journeys across farms and food cultures around the world, we saw the beauty of ingredients grown where they truly belong—rooted in land, tradition, and time.
                </p>
                <p>
                  Our purpose is simple: to bring native products from different parts of the world together under one roof, carefully sourced from their origins and shared in their most honest form.
                </p>
              </div>
              <div className="bg-gradient-to-r from-brand-cream to-brand-cream/50 rounded-xl p-6 border-l-4 border-brand-moss">
                <p className="font-serif text-xl text-brand-dark italic">
                  "Earthy Munchy connects global native goodness to everyday living—naturally."
                </p>
              </div>
            </div>
          </div>

          {/* Wild - Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
            {/* Decorative blur */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-yellow/20 rounded-full blur-3xl" />

            <div className="space-y-6 relative z-10 order-2 lg:order-1">
              <span className="inline-block text-xs font-bold text-brand-copper uppercase tracking-widest">02</span>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark">Wild</h3>
              <div className="text-neutral-600 leading-relaxed space-y-4 text-lg">
                <p>
                  Some of the world's most treasured foods are born wild—shaped by forests, seasons, and time. Honey gathered from flowering landscapes, cinnamon and cloves grown in their native soils, and maple drawn from ancient trees all begin exactly where nature intended.
                </p>
                <p>
                  At Earthy Munchy, these wild ingredients are sourced from their authentic origins and handled with care, allowing their natural character to remain untouched. Free from shortcuts and unnecessary intervention, they carry the purity, aroma, and depth that only nature can create.
                </p>
              </div>
              <div className="bg-gradient-to-r from-brand-cream to-brand-cream/50 rounded-xl p-6 border-l-4 border-brand-moss">
                <p className="font-serif text-xl text-brand-dark italic">
                  "Wild by origin. Honest by nature."
                </p>
              </div>
            </div>

            <div className="relative z-10 order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/newproductshots/story-sourcing-wild-honey.png"
                  alt="Wild honey harvesting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-brand-cream">
                <Leaf size={32} className="text-brand-moss" />
              </div>
            </div>
          </div>

          {/* Craft - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Decorative blur */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-copper/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/newproductshots/story-sourcing-blade.png"
                  alt="Traditional craftsmanship"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-brand-cream">
                <ShieldCheck size={32} className="text-brand-moss" />
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <span className="inline-block text-xs font-bold text-brand-copper uppercase tracking-widest">03</span>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark">Craft</h3>
              <div className="text-neutral-600 leading-relaxed space-y-4 text-lg">
                <p>
                  Each product begins with native ingredients, grown in the environments where they naturally thrive and nurtured by generations of traditional knowledge.
                </p>
                <p>
                  We work closely with farmers, growers, and artisans who use time-honored methods—harvesting with care, processing minimally, and respecting the natural rhythm of the land. This mindful craft not only preserves flavor and nutrition, but also supports sustainable practices that protect soil, biodiversity, and local communities.
                </p>
                <p>
                  By honoring tradition and choosing sustainability over shortcuts, Earthy Munchy ensures that native products retain their true character—just as they have for centuries.
                </p>
              </div>
              <div className="bg-gradient-to-r from-brand-cream to-brand-cream/50 rounded-xl p-6 border-l-4 border-brand-moss">
                <p className="font-serif text-xl text-brand-dark italic">
                  "What reaches you is not just food, but the result of thoughtful craftsmanship rooted in nature and shaped by human care."
                </p>
              </div>
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