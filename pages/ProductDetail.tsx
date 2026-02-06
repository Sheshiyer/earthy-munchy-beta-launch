import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, honeyVarieties } from '../data';
import { ArrowLeft, Check, ShoppingBag, Truck, ShieldCheck, Facebook, Twitter, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ImageCarousel from '../components/ImageCarousel';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';
import { generateProductSchema, generateBreadcrumbSchema, getAITags } from '../utils/ai-seo';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream">
                <h2 className="text-2xl font-serif mb-4">Product not found</h2>
                <Link to="/shop" className="text-brand-moss hover:underline">Return to Shop</Link>
            </div>
        );
    }

    // Generate Schemas
    const productSchema = generateProductSchema(product);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', item: '/' },
        { name: 'Shop', item: '/shop' },
        { name: product.name, item: `/product/${product.id}` }
    ]);
    const aiTags = getAITags(product.name, product.description, product.category);

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
            <SEO
                title={`${product.name} | Earthy Munchy`}
                description={product.metaDescription}
                image={product.image}
                imageAlt={product.name}
                type="product"
                canonical={`https://earthymunchy.com/#/product/${product.id}`}
                schema={[productSchema, breadcrumbSchema]}
                aiTags={aiTags}
            />
            <div className="max-w-7xl mx-auto px-6 py-10" data-ai-context="product_detail" data-ai-topic={product.category}>
                <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-dark mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Shop
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="space-y-4" data-ai-context="product_images">
                        <ErrorBoundary>
                            <ImageCarousel
                                images={product.images || [product.image]}
                                alt={product.name}
                            />
                        </ErrorBoundary>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col h-full" data-ai-context="product_info">
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
                                    <Truck size={16} /> Free shipping on orders over ₹499
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={16} /> 100% Authentic Guarantee
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                                    {product.id === 'wildflower-honey' ? 'Available on:' : 'Coming soon on:'}
                                </span>
                                <div className="flex gap-3">
                                    {product.id === 'wildflower-honey' ? (
                                        <a
                                            href="https://www.amazon.in/dp/B0GKPCLCXZ"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 bg-[#232F3E] text-white rounded text-xs font-bold hover:bg-[#232F3E]/90 transition-colors"
                                        >
                                            Amazon
                                        </a>
                                    ) : (
                                        <>
                                            <div className="px-3 py-1 bg-neutral-100 rounded text-xs font-bold text-neutral-600">Amazon</div>
                                            <div className="px-3 py-1 bg-neutral-100 rounded text-xs font-bold text-neutral-600">Flipkart</div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Social Share */}
                            <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Follow us:</span>
                                <a
                                    href="https://www.instagram.com/earthy.munchy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-brand-moss hover:text-white transition-all duration-300"
                                    aria-label="Visit on Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Extended Details */}
                <div className="mt-20">
                    <div className="border-b border-neutral-200 mb-8 flex gap-8">
                        <h3 className="pb-4 text-sm font-bold uppercase tracking-wider text-brand-dark border-b-2 border-brand-dark">
                            Full Description
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 text-neutral-600 leading-relaxed text-sm space-y-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;