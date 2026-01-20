import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20 animate-fade-in">
        <SEO 
            title="Journal | Earthy Munchy"
            description="Stories from the source. Learn about sustainable harvesting, health benefits of natural ingredients, and the people behind our products."
            canonical="https://earthymunchy.com/#/journal"
        />
        <div className="bg-brand-cream/30 py-16 mb-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl lg:text-5xl font-serif font-medium text-brand-dark mb-4">The Journal</h1>
                <p className="text-neutral-500 max-w-xl">Notes on terroir, tradition, and the taste of the wild.</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                    <Link to={`/journal/${post.slug}`} key={post.id} className="group block">
                        <div className="bg-neutral-100 rounded-xl overflow-hidden aspect-[16/9] mb-6">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-widest text-neutral-400">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.tags[0]}</span>
                            </div>
                            <h2 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-moss transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-neutral-500 line-clamp-3 text-sm leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Blog;
