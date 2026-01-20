import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
  schema?: object | object[];
  aiTags?: {
    'ai:title'?: string;
    'ai:description'?: string;
    'ai:topic'?: string;
    'ai:content_type'?: string;
    'ai:created_by'?: string;
    [key: string]: string | undefined;
  };
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = '/img/story-hero-terroir.png', // Default image
  imageAlt = 'Earthy Munchy - Naturally Sourced',
  schema,
  aiTags
}) => {
  const siteUrl = 'https://earthymunchy.com'; // Replace with actual domain when live
  const fullCanonical = canonical || window.location.href;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Ensure schema is always an array for simpler rendering
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* AI-Specific Meta Tags */}
      {aiTags && Object.entries(aiTags).map(([key, value]) => (
        value && <meta key={key} name={key} content={value} />
      ))}
      {!aiTags && (
        <>
            <meta name="ai:title" content={title} />
            <meta name="ai:description" content={description} />
        </>
      )}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data (JSON-LD) */}
      {schemaList.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(
            schemaList.length === 1 ? schemaList[0] : {
              '@context': 'https://schema.org',
              '@graph': schemaList
            }
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
