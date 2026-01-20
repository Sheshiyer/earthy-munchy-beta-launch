import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';
import { ArrowLeft, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, getAITags } from '../utils/ai-seo';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream">
            <h2 className="text-2xl font-serif mb-4">Article not found</h2>
            <Link to="/journal" className="text-brand-moss hover:underline">Return to Journal</Link>
        </div>
    );
  }

  // Generate Schemas
  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Journal', item: '/journal' },
    { name: post.title, item: `/journal/${post.slug}` }
  ]);
  const faqSchema = generateFAQSchema(post.content);
  
  const schemas: object[] = [articleSchema, breadcrumbSchema];
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  // Generate AI Tags
  const aiTags = getAITags(post.title, post.excerpt, post.tags[0]);

  return (
    <div className="min-h-screen bg-white animate-fade-in pb-24">
        <SEO 
            title={`${post.title} | Earthy Munchy Journal`}
            description={post.excerpt}
            image={post.image}
            type="article"
            canonical={`https://earthymunchy.com/#/journal/${post.slug}`}
            schema={schemas}
            aiTags={aiTags}
        />
        
        {/* Hero */}
        <div className="relative h-[60vh] w-full" data-ai-context="hero_image">
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest mb-6 opacity-90">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-serif font-medium leading-tight" data-ai-context="article_title">{post.title}</h1>
                </div>
            </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 -mt-20 relative z-10">
            <div className="bg-white p-8 md:p-12 rounded-t-2xl shadow-xl">
                <Link to="/journal" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-dark mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Journal
                </Link>

                <div 
                    className="prose prose-lg prose-neutral prose-headings:font-serif prose-headings:text-brand-dark prose-a:text-brand-moss prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                    data-ai-context="article_body"
                    data-ai-topic={post.tags.join(', ')}
                />

                <div className="mt-12 pt-8 border-t border-neutral-100">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                <Tag size={12} /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogPost;
