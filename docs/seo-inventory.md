# Earthy Munchy SEO Inventory & Codebase Index

**Date:** 2026-01-20
**Status:** Phase 2 Complete

## 1. Site Inventory (SEO Metadata)

| Path | Component | Title Tag | Meta Description | Status |
|------|-----------|-----------|------------------|--------|
| `/` | `Home.tsx` | Earthy Munchy \| Premium Naturally Sourced Spices & Honey | Discover authentic Ceylon Cinnamon, wild-harvested honey, and premium spices sourced directly from farms in Sri Lanka and India. | ✅ Optimized |
| `/shop` | `Shop.tsx` | Shop Premium Spices & Wild Honey \| Earthy Munchy | Browse our curated collection of authentic Ceylon Cinnamon, wild-harvested honey, and premium spices sourced directly from sustainable farms. | ✅ Optimized |
| `/story` | `Story.tsx` | Our Story - Roots, Soil, and a Promise \| Earthy Munchy | Learn about our journey to source the finest ingredients. From the hill country of Sri Lanka to the forests of India, we preserve traditions. | ✅ Optimized |
| `/contact` | `Contact.tsx` | Contact Us \| Earthy Munchy | Get in touch with Earthy Munchy. Whether for corporate gifting, wholesale partnerships, or general enquiries. | ✅ Optimized |
| `/journal` | `Blog.tsx` | Journal \| Earthy Munchy | Stories from the source. Learn about sustainable harvesting, health benefits of natural ingredients, and the people behind our products. | ✅ Optimized |
| `/privacy` | `PrivacyPolicy.tsx` | Privacy Policy \| Earthy Munchy | Learn how Earthy Munchy collects, uses, and protects your personal data. We are committed to your privacy. | ✅ Optimized |
| `/terms` | `Terms.tsx` | Terms & Conditions \| Earthy Munchy | Read our Terms & Conditions regarding the use of our website and purchase of our naturally sourced products. | ✅ Optimized |
| `/returns` | `Returns.tsx` | Shipping & Returns Policy \| Earthy Munchy | Information on shipping zones, delivery timelines, and our returns policy for damaged or incorrect items. | ✅ Optimized |

### Dynamic Routes

| Path | Component | Title Logic | Description Logic | Status |
|------|-----------|-------------|-------------------|--------|
| `/product/:id` | `ProductDetail.tsx` | `{product.name} \| Earthy Munchy` | `{product.description}` | ✅ Optimized |
| `/journal/:slug` | `BlogPost.tsx` | `{post.title} \| Earthy Munchy Journal` | `{post.excerpt}` | ✅ Optimized |

## 2. Codebase Index (SEO Related)

### Core Components
-   **`components/SEO.tsx`**: Reusable Helmet wrapper. Handles Title, Meta Description, Canonical, Open Graph (OG), and Twitter Cards.
-   **`App.tsx`**: Route definitions wrapped in `CartProvider` and `Router`. `HelmetProvider` is in `index.tsx`.

### Data Sources
-   **`data.ts`**:
    -   `products`: Array of product objects. Used for `/shop` and `/product/:id`.
    -   `blogPosts`: Array of blog objects. Used for `/journal` and `/journal/:slug`.

### Assets
-   **`public/robots.txt`**: Crawler directives.
-   **`public/sitemap.xml`**: Static sitemap listing all core pages.
-   **`public/img/`**: Static assets.
    -   `newproductshots/`: High-res product images and hero videos.

## 3. SEO Coverage Report
-   **Meta Tags**: 100% Coverage (All static and dynamic routes).
-   **Open Graph**: Implemented via `SEO.tsx` (uses `title`, `description`, `image`).
-   **Canonical Tags**: Implemented via `SEO.tsx` (self-referencing).
-   **Alt Text**: Implemented in `Home.tsx` (fallback images) and `data.ts` (product images).
-   **Sitemap**: Generated and linked in `robots.txt`.
