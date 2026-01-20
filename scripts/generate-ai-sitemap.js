import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Helper to extract data from data.ts content
function extractData(content) {
  const blogSlugs = [];
  const productIds = [];
  
  // Naive splitting to separate sections
  const parts = content.split('export const blogPosts');
  const productsPart = parts[0];
  const blogPart = parts[1] || '';

  // Extract Product IDs
  const productIdRegex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = productIdRegex.exec(productsPart)) !== null) {
    productIds.push(match[1]);
  }

  // Extract Blog Slugs
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  while ((match = slugRegex.exec(blogPart)) !== null) {
    blogSlugs.push(match[1]);
  }
  
  return { blogSlugs, productIds };
}

const dataTsContent = fs.readFileSync(path.join(rootDir, 'data.ts'), 'utf8');
const { blogSlugs, productIds } = extractData(dataTsContent);

const baseUrl = 'https://earthymunchy.com';
const date = new Date().toISOString().split('T')[0];

// 1. Generate XML Sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Static routes
const staticRoutes = ['', '/shop', '/story', '/journal', '/contact', '/legal/privacy-policy', '/legal/terms-of-service', '/legal/returns'];
staticRoutes.forEach(route => {
  sitemap += `  <url>
    <loc>${baseUrl}${route ? '/#' + route : ''}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// Product routes
productIds.forEach(id => {
  sitemap += `  <url>
    <loc>${baseUrl}/#/product/${id}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

// Blog routes
blogSlugs.forEach(slug => {
  sitemap += `  <url>
    <loc>${baseUrl}/#/journal/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += `</urlset>`;
fs.writeFileSync(path.join(rootDir, 'public', 'ai-sitemap.xml'), sitemap);

// 2. Generate llms.txt (The AI Sitemap)
let llmsTxt = `# Earthy Munchy AI Context

## Company Overview
Earthy Munchy sells naturally sourced spices and honey from the wild. 
We prioritize "natural" (unprocessed, wild-harvested) over "organic" (certified but potentially industrial).

## Core Products
`;

productIds.forEach(id => {
    // Basic cleaning of ID for display
    const name = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    llmsTxt += `- ${name}: ${baseUrl}/#/product/${id}\n`;
});

llmsTxt += `
## Knowledge Base (Articles)
`;

blogSlugs.forEach(slug => {
    const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    llmsTxt += `- ${name}: ${baseUrl}/#/journal/${slug}\n`;
});

fs.writeFileSync(path.join(rootDir, 'public', 'llms.txt'), llmsTxt);

console.log('AI Sitemap (ai-sitemap.xml) and llms.txt generated in public/');
