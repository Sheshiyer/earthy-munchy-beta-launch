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

export const generateWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Earthy Munchy',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/shop?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Earthy Munchy',
    image: `${SITE_URL}/logo-tm.png`,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+91-XXX-XXX-XXXX',
    email: 'hello@earthymunchy.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mercury Inc.',
      addressLocality: 'Bangalore',
      postalCode: '560084',
      addressCountry: 'IN'
    },
    sameAs: ['https://www.instagram.com/earthy.munchy']
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

    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: [{
        '@type': 'ImageObject',
        url: imageUrl,
        width: '1200',
        height: '1200'
      }],
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
        priceValidUntil: '2026-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: product.id === 'wildflower-honey'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
        seller: {
          '@type': 'Organization',
          name: 'Earthy Munchy'
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'INR'
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'IN'
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 2,
              maxValue: 3,
              unitCode: 'DAY'
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 3,
              maxValue: 7,
              unitCode: 'DAY'
            }
          }
        }
      }
    };

    // Add aggregateRating if available
    if (product.rating && product.reviewCount) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: product.rating.toString(),
        reviewCount: product.reviewCount.toString()
      };
    }

    return schema;
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
