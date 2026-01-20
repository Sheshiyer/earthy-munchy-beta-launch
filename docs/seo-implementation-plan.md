# Comprehensive SEO & Content Implementation Plan: Earthy Munchy Beta Launch

**Date:** 2026-01-20
**Version:** 1.0
**Status:** Approved for Execution

---

## 1. Executive Summary

This document outlines the strategic roadmap for transforming the Earthy Munchy beta launch codebase into a search-engine-optimized, legally compliant, and content-rich digital storefront. The primary objectives are to establish a robust technical SEO foundation, ensure legal compliance through dedicated policy pages, and launch a content marketing initiative to drive organic traffic.

The execution plan is divided into three core pillars:
1.  **Technical SEO MVP**: Optimizing the existing React Single Page Application (SPA) for search engine crawlability and indexability.
2.  **Legal Compliance**: Establishing trust and adherence to regulations via standard policy pages.
3.  **Content Expansion**: Launching a blog architecture with high-value articles to target long-tail keywords.

---

## 2. Technical SEO Upgrade (MVP)

### 2.1. Objectives
-   **Indexability**: Ensure search engines can render and index the React SPA content effectively.
-   **Visibility**: optimize Title tags and Meta Descriptions for high CTR (Click-Through Rate).
-   **Social Sharing**: Implement Open Graph (OG) and Twitter Card protocols for rich social snippets.
-   **Accessibility**: Achieve 100% Alt Text coverage for all images to support screen readers and image search.

### 2.2. Architecture & Tooling
Given the project uses **React** with **Vite** and **React Router**, we will integrate **`react-helmet-async`** to manage the document head dynamically. This allows each route to define its own title, meta tags, and structured data.

**Key Technical Decisions:**
-   **Head Management**: `react-helmet-async` for thread-safe head management.
-   **Sitemap**: Generate `sitemap.xml` for submission to Google Search Console.
-   **Robots.txt**: Configure to allow crawling of main content while blocking private routes (e.g., cart, checkout flows).
-   **Canonicalization**: Enforce self-referencing canonical tags to prevent duplicate content issues, especially with query parameters.

### 2.3. Implementation Tasks

#### 2.3.1. Meta Tags & Titles
Each page must define a unique `title` and `meta description`.
-   **Home**: "Earthy Munchy | Premium Naturally Sourced Spices & Honey"
-   **Shop**: "Shop Organic Spices & Wild Honey | Earthy Munchy"
-   **Product Detail**: "{Product Name} - {Grade} | Earthy Munchy"
-   **Story**: "Our Journey - Sustainable Sourcing | Earthy Munchy"

#### 2.3.2. Structured Data (JSON-LD)
We will implement Schema.org markup to help search engines understand the content context.
-   **Organization Schema**: On the Home page (Logo, Name, Contact).
-   **Product Schema**: On Product Detail pages (Name, Image, Price, Availability).
-   **Breadcrumb Schema**: On nested pages (Shop > Product).

#### 2.3.3. Image Optimization (Alt Text)
A comprehensive audit of the `public/img` directory has identified key assets. We will programmatically or manually assign descriptive alt text to every image component.
-   **Product Shots**: "Jar of Earthy Munchy Wildflower Honey on wooden table"
-   **Decorative**: "Close up texture of cinnamon bark"

---

## 3. Legal Compliance Framework

To launch a legitimate e-commerce operation, three critical pages must be added. These will be linked in the Footer.

### 3.1. Privacy Policy (`/privacy`)
**Purpose**: Disclose how user data is collected, used, and stored.
**Key Sections**:
-   Data Collection (Cookies, Analytics, Order Info).
-   Data Usage (Order processing, Marketing).
-   Third-Party Sharing (Payment processors, Shipping partners).
-   User Rights (GDPR/CCPA compliance basics).

### 3.2. Terms & Conditions (`/terms`)
**Purpose**: Define the rules for using the website and purchasing products.
**Key Sections**:
-   Acceptance of Terms.
-   Intellectual Property Rights.
-   Product Accuracy & Pricing.
-   Limitation of Liability.
-   Governing Law.

### 3.3. Returns & Shipping Policy (`/returns`)
**Purpose**: Clarify logistics and refund processes to reduce customer friction.
**Key Sections**:
-   Shipping Zones & Timelines.
-   Return Eligibility (Timeframe, Condition).
-   Refund Process.
-   Damaged Items procedure.

---

## 4. Content Strategy & Blog Architecture

### 4.1. Architecture
We will introduce a `/blog` route to host articles. This serves as a top-of-funnel acquisition channel.
-   **Blog Index (`/blog`)**: Grid view of recent articles.
-   **Article Page (`/blog/:slug`)**: Template for rendering individual posts.

### 4.2. Content Pillar: "Naturally Sourced"
The first piece of content will focus on the core value proposition: **"5 Benefits of Naturally Sourced Ingredients"**.

**Target Keywords**:
-   Primary: "benefits of naturally sourced ingredients"
-   Secondary: "organic spices health benefits", "sustainable honey sourcing", "clean label food benefits"

**Article Outline**:
1.  **Introduction**: The shift towards clean eating and transparency.
2.  **Benefit 1: Superior Flavor Profile**: How terroir affects taste (referencing Earthy Munchy's single-origin spices).
3.  **Benefit 2: Nutritional Potency**: Higher antioxidant levels in non-irradiated spices.
4.  **Benefit 3: Environmental Impact**: Supporting biodiversity and sustainable farming (referencing the Mangrove story).
5.  **Benefit 4: No Artificial Additives**: Avoiding anti-caking agents and preservatives.
6.  **Benefit 5: Supporting Local Communities**: Ethical trade practices.
7.  **Conclusion**: A call to action to explore the Earthy Munchy shop.

---

## 5. Detailed Task Breakdown & Roadmap

### Phase 1: Foundation (Current Sprint)
-   [ ] **Install Dependencies**: `react-helmet-async`.
-   [ ] **Configure SEO Component**: Create a reusable `<SEO />` component.
-   [ ] **Wrap App**: Add `HelmetProvider` to `App.tsx` or `index.tsx`.

### Phase 2: Page Implementation
-   [ ] **Create Legal Pages**:
    -   `src/pages/legal/PrivacyPolicy.tsx`
    -   `src/pages/legal/Terms.tsx`
    -   `src/pages/legal/Returns.tsx`
-   [ ] **Update Router**: Add routes for `/privacy`, `/terms`, `/returns`.
-   [ ] **Update Footer**: Link to new legal pages.

### Phase 3: Blog Implementation
-   [ ] **Create Blog Components**:
    -   `src/pages/blog/BlogIndex.tsx`
    -   `src/pages/blog/BlogPost.tsx`
-   [ ] **Draft Article**: Write "5 Benefits..." content (Markdown or JSON structure).
-   [ ] **Integrate Article**: Render content in `BlogPost.tsx`.

### Phase 4: Optimization (The SEO Agent Work)
-   [ ] **Apply Meta Tags**: Add `<SEO />` to all existing pages (Home, Shop, Story, Contact).
-   [ ] **Product SEO**: Dynamic meta tags for `ProductDetail` based on product data.
-   [ ] **Audit Alt Text**: Review `ImageCarousel` and other image components to ensure `alt` props are populated.

### Phase 5: Verification
-   [ ] **Lighthouse Audit**: Run performance and SEO checks.
-   [ ] **Link Check**: Verify all internal footer and nav links.
-   [ ] **Social Preview**: Test OG tags using validators.

---

## 6. Resource Requirements
-   **Development**: 1 Senior Frontend Engineer (Trae).
-   **Content**: "5 Benefits" article copy (Generated by Trae).
-   **Assets**: Existing image library (sufficient for initial blog posts).

## 7. Success Metrics
-   **SEO**: 100% SEO Score on Lighthouse.
-   **Compliance**: All 3 legal pages live and accessible.
-   **Content**: 1 Blog post published and indexed.
-   **User Experience**: No broken links, correct browser titles on navigation.
