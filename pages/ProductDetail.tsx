import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, honeyVarieties } from '../data';
import { ArrowLeft, Check, ShoppingBag, Truck, ShieldCheck, Facebook, Twitter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ImageCarousel from '../components/ImageCarousel';
import ErrorBoundary from '../components/ErrorBoundary';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'nutrition'>('description');
  const { addToCart } = useCart();

  if (!product) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream">
            <h2 className="text-2xl font-serif mb-4">Product not found</h2>
            <Link to="/shop" className="text-brand-moss hover:underline">Return to Shop</Link>
        </div>
    );
  }

  const isHoneyVault = product.id === 'honey-vault';

  const handleShare = (platform: 'facebook' | 'twitter' | 'pinterest') => {
    const shareUrl = window.location.href;
    const shareText = `Check out ${product.name} on Earthy Munchy!`;
    const shareImage = product.image;

    let url = '';
    switch (platform) {
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
            break;
        case 'pinterest':
            url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(shareImage)}&description=${encodeURIComponent(shareText)}`;
            break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-dark mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
                <ErrorBoundary>
                    <ImageCarousel 
                        images={product.images || [product.image]} 
                        alt={product.name} 
                    />
                </ErrorBoundary>
            </div>

            {/* Details */}
            <div className="flex flex-col h-full">
                <div className="mb-8">
                    <span className="text-xs font-bold text-brand-moss uppercase tracking-widest bg-brand-moss/10 px-2 py-1 rounded">
                        {product.grade || (isHoneyVault ? 'Collection' : 'Premium')}
                    </span>
                    <h1 className="text-4xl font-serif font-medium text-brand-dark mt-4 mb-2">{product.name}</h1>
                    <p className="text-lg text-neutral-500 mb-6">{product.subtitle}</p>
                    <div className="text-2xl font-semibold text-brand-dark mb-6">₹{product.price} <span className="text-sm font-normal text-neutral-400 ml-2">/ {product.weight}</span></div>
                    
                    <p className="text-neutral-600 leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                        {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-neutral-600">
                                <Check size={16} className="text-brand-moss" /> {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto border-t border-neutral-100 pt-8">
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center border border-neutral-200 rounded-full">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-4 py-2 text-neutral-500 hover:text-brand-dark"
                            >-</button>
                            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-4 py-2 text-neutral-500 hover:text-brand-dark"
                            >+</button>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            className="flex-1 bg-brand-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-moss transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-dark/20"
                        >
                            <ShoppingBag size={18} /> Add to Cart - ₹{product.price * quantity}
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-neutral-500 mb-8">
                        <div className="flex items-center gap-2">
                            <Truck size={16} /> Free shipping on orders over ₹999
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} /> 100% Authentic Guarantee
                        </div>
                    </div>

                    {/* Social Share */}
                    <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Share:</span>
                        <button 
                            onClick={() => handleShare('facebook')}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-brand-moss hover:text-white transition-all duration-300"
                            aria-label="Share on Facebook"
                        >
                            <Facebook size={18} />
                        </button>
                        <button 
                            onClick={() => handleShare('twitter')}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-brand-moss hover:text-white transition-all duration-300"
                            aria-label="Share on Twitter"
                        >
                            <Twitter size={18} />
                        </button>
                        <button 
                            onClick={() => handleShare('pinterest')}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-brand-moss hover:text-white transition-all duration-300"
                            aria-label="Share on Pinterest"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Extended Details */}
        <div className="mt-20">
            <div className="border-b border-neutral-200 mb-8 flex gap-8">
                <button 
                    onClick={() => setActiveTab('description')}
                    className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'description' ? 'border-brand-dark text-brand-dark' : 'border-transparent text-neutral-400 hover:text-brand-dark'}`}
                >
                    Full Description
                </button>
                {product.nutrition && (
                    <button 
                        onClick={() => setActiveTab('nutrition')}
                        className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'nutrition' ? 'border-brand-dark text-brand-dark' : 'border-transparent text-neutral-400 hover:text-brand-dark'}`}
                    >
                        Nutritional Facts
                    </button>
                )}
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 text-neutral-600 leading-relaxed text-sm space-y-4">
                    {activeTab === 'description' ? (
                        <>
                            <p>
                                At Earthy Munchy, we believe the heart of every kitchen lies in its ingredients. 
                                This product is sourced directly from farms where traditional practices are still honored.
                                Packed in eco-friendly kraft paper pouches with zip-lock closures to maintain freshness.
                            </p>
                            {isHoneyVault && (
                                <div className="mt-8 grid md:grid-cols-2 gap-4">
                                    {honeyVarieties.map((h, i) => (
                                        <div key={i} className="bg-neutral-50 p-4 rounded-lg">
                                            <h4 className="font-serif font-bold text-brand-dark">{h.name}</h4>
                                            <p className="text-xs text-neutral-500 mt-1">{h.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-neutral-50 p-8 rounded-xl max-w-md">
                             <h3 className="font-serif font-bold text-lg mb-4">Nutrition Facts</h3>
                             <div className="space-y-3">
                                {Object.entries(product.nutrition || {}).map(([key, value]) => (
                                    <div key={key} className="flex justify-between border-b border-neutral-200 pb-2">
                                        <span className="font-medium text-neutral-700">{key}</span>
                                        <span className="text-neutral-500">{value}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;