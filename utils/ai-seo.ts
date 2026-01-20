import { BlogPost, Product } from '../types';

const SITE_URL = 'https://earthymunchy.com';

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Earthy Munchy',
    url: SITE_URL,
    logo: `${SITE_URL}/logo-tm.png`,
    sameAs: [
      'https://www.instagram.com/earthy.munchy',
    ],
    description: 'Purveyors of naturally sourced spices and honey from the wild.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@earthymunchy.com' // Placeholder, verify if real
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${SITE_URL}/#${item.item}`,
    })),
  };
};

export const generateArticleSchema = (post: BlogPost) => {
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;
  
  // Try to parse date, fallback to current if invalid
  let datePublished;
  try {
    datePublished = new Date(post.date).toISOString();
  } catch (e) {
    datePublished = new Date().toISOString();
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: [imageUrl],
    datePublished: datePublished,
    dateModified: datePublished,
    author: [{
      '@type': 'Person',
      name: post.author,
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Earthy Munchy',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-tm.png`
      }
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#/journal/${post.slug}`
    }
  };
};

export const generateFAQSchema = (content: string) => {
  // Extract PAA section content first to avoid matching other H4s
  const paaRegex = /People Also Ask(.*?)<\/div>\s*<\/div>/s;
  const paaMatch = content.match(paaRegex);
  
  if (!paaMatch) return null;

  const faqSection = paaMatch[1];
  const faqRegex = /<h4[^>]*>(.*?)<\/h4>\s*<p[^>]*>(.*?)<\/p>/gs;
  const matches = [...faqSection.matchAll(faqRegex)];
  
  if (matches.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: matches.map(match => ({
      '@type': 'Question',
      name: stripHtml(match[1]),
      acceptedAnswer: {
        '@type': 'Answer',
        text: match[2] 
      }
    }))
  };
};

export const generateProductSchema = (product: Product) => {
    const imageUrl = product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}`;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: [imageUrl],
      description: product.description,
      sku: product.id,
      brand: {
        '@type': 'Brand',
        name: 'Earthy Munchy'
      },
      offers: {
        '@type': 'Offer',
        url: `${SITE_URL}/#/product/${product.id}`,
        priceCurrency: 'INR',
        price: product.price,
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock'
      }
    };
  };

export const stripHtml = (html: string) => {
   return html.replace(/<[^>]*>?/gm, '');
};

export const getAITags = (title: string, description: string, topic?: string) => {
    return {
        'ai:title': title,
        'ai:description': description,
        'ai:topic': topic || 'Natural Food',
        'ai:content_type': 'article',
        'ai:created_by': 'Earthy Munchy'
    };
};
