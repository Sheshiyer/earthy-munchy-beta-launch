import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import { Category } from '../types';
import { Filter } from 'lucide-react';
import SEO from '../components/SEO';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'all'>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter || (filter === 'honey' && p.category === 'set'));

  return (
    <div className="min-h-screen bg-white pb-20 animate-fade-in">
        <SEO 
            title="Shop Premium Spices & Wild Honey | Earthy Munchy"
            description="Browse our curated collection of authentic Ceylon Cinnamon, wild-harvested honey, and premium spices sourced directly from sustainable farms."
            canonical="https://earthymunchy.com/#/shop"
        />
        <div className="bg-brand-cream/30 py-16 mb-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl lg:text-5xl font-serif font-medium text-brand-dark mb-4">Shop Essentials</h1>
                <p className="text-neutral-500 max-w-xl">Curated ingredients from their authentic origins. Whether it's the pencil-thin C5 Cinnamon from Sri Lanka or the wild honey from the Sundarbans.</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-10 border-b border-neutral-100 pb-6">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
                    <Filter size={14} /> Filter:
                </span>
                <button 
                    onClick={() => setFilter('all')}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === 'all' ? 'bg-brand-dark text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                >
                    All
                </button>
                <button 
                    onClick={() => setFilter('spice')}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === 'spice' ? 'bg-brand-dark text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                >
                    Spices
                </button>
                <button 
                    onClick={() => setFilter('honey')}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === 'honey' ? 'bg-brand-dark text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                >
                    Honey & Sets
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className="group block">
                        <div className="bg-neutral-50 rounded-xl overflow-hidden mb-5 relative aspect-[4/5]">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {product.category === 'set' && (
                                <div className="absolute top-4 right-4 bg-brand-copper text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                                    Gift Set
                                </div>
                            )}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center pb-6">
                                <span className="bg-white text-brand-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide">View Product</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-serif font-medium text-brand-dark group-hover:text-brand-moss transition-colors">
                                    {product.name}
                                </h3>
                                <span className="font-semibold text-brand-dark">₹{product.price}</span>
                            </div>
                            <p className="text-xs text-neutral-500 uppercase tracking-wide mb-2">{product.grade || product.subtitle}</p>
                            <p className="text-sm text-neutral-500 line-clamp-2">{product.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Shop;