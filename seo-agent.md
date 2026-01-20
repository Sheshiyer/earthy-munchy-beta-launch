# SEO Agent Task Documentation

**Version:** 2.0 (Updated from v1.0 XML)
**Last Updated:** 2026-01-20
**Author:** Trae AI Assistant
**Status:** In Progress

## 1. Project Overview

**Objective:**
Index the codebase, understand the landing page's copy and intent, and produce validated SEO updates including:
- Page title and meta description
- Keywords strategy
- Canonical and robots directives
- Open Graph and Twitter Cards
- JSON-LD structured data
- Structured heading checks
- Complete alt text coverage for all images

**Inputs:**
- **Primary URL:** `{{PRIMARY_URL}}`
- **Brand:** `{{BRAND_NAME}}`
- **Voice & Tone:** `{{VOICE_AND_TONE_BRIEF}}`
- **Target Audience:** `{{TARGET_AUDIENCES}}`
- **Market Locale:** `{{MARKET_LOCALE}}`
- **Framework:** `{{FRAMEWORK_HINT}}` (e.g., React/Vite)

**Constraints:**
- **Title Length:** 35-60 chars
- **Meta Description:** 120-160 chars
- **Alt Text:** 5-125 chars
- **Safety:** Do not invent content; avoid keyword stuffing; perform safe file operations.

---

## 2. Task Roadmap

### Phase 1: Kickoff & Setup
*Status: **Pending***

- [ ] **1.1 Confirm Access & Permissions**
  - **Objective:** Verify repo access and read-only crawl permissions.
  - **Resources:** Repository root, Primary URL.
  - **Dependencies:** None.

- [ ] **1.2 Initialize Workspace**
  - **Objective:** Create `artifacts/` directory and initialize logs.
  - **Deliverable:** Working directory setup.

### Phase 2: Index Codebase
*Status: **Pending***

- [ ] **2.1 Enumerate Files**
  - **Objective:** List all relevant files (.tsx, .css, etc.) to understand project structure.
  - **Resources:** `ls`, `find` commands.

- [ ] **2.2 Detect Rendering Stack**
  - **Objective:** Identify if CSR, SSR, or SSG (e.g., React/Vite vs Next.js).
  - **Resources:** `package.json`.

- [ ] **2.3 Identify Landing Page Component**
  - **Objective:** Locate the main entry point for the landing page (e.g., `src/App.tsx`, `pages/Home.tsx`).
  - **Deliverable:** Path to landing component.

- [ ] **2.4 Generate Site Inventory**
  - **Objective:** Create inventory of discovered pages and image references.
  - **Output:** `artifacts/site_inventory.json`

### Phase 3: Crawl & Parse Landing DOM
*Status: **Pending***

- [ ] **3.1 Parse Landing Page**
  - **Objective:** Fetch and parse the HTML structure of the landing page.
  - **Details:** Extract head tags, meta, headings (H1-H6), images, and links.
  - **Output:** `artifacts/landing_dom.json`

### Phase 4: Copy Understanding & Section Mapping
*Status: **Pending***

- [ ] **4.1 Extract Copy**
  - **Objective:** Extract visible text from all sections (hero, features, pricing, etc.).

- [ ] **4.2 Map User Intent**
  - **Objective:** Identify page promise, differentiators, and CTAs per section.
  - **Output:** `artifacts/copy_outline.md`

### Phase 5: Keyword Plan
*Status: **Pending***

- [ ] **5.1 Validate Keywords**
  - **Objective:** Align primary/secondary keywords with discovered copy.

- [ ] **5.2 Assign Keywords to Sections**
  - **Objective:** Map 1 primary and ~2 secondary keywords to each section for natural placement.
  - **Output:** `artifacts/keyword_plan.json`

### Phase 6: SEO Proposal Generation
*Status: **Pending***

- [ ] **6.1 Draft Meta Tags**
  - **Objective:** Create Title (≤60 chars) and Description (≤160 chars).

- [ ] **6.2 Generate Social Tags**
  - **Objective:** Create Open Graph and Twitter card tags (using 1200x630 image).

- [ ] **6.3 Generate Structured Data**
  - **Objective:** Create JSON-LD (WebSite, Organization, BreadcrumbList).

- [ ] **6.4 Audit Headings & Images**
  - **Objective:** Propose fixes for heading hierarchy and generate missing alt text.
  - **Output:** `artifacts/seo_proposals.json`

### Phase 7: Code Change Plan & Diff
*Status: **Pending***

- [ ] **7.1 Locate Insertion Point**
  - **Objective:** Find where to inject `<head>` tags (e.g., `index.html` or `Helmet` component).

- [ ] **7.2 Generate Code Changes**
  - **Objective:** Create minimal, idempotent changes to apply SEO proposals.
  - **Output:** `artifacts/code_diffs.patch`

### Phase 8: Validation
*Status: **Pending***

- [ ] **8.1 Verify Constraints**
  - **Objective:** Check character counts, H1 usage, and alt text coverage.

- [ ] **8.2 Lighthouse Checklist**
  - **Objective:** Run a programmatic checklist for SEO best practices.
  - **Output:** `artifacts/validation_report.md`

### Phase 9: Outputs & Handover
*Status: **Pending***

- [ ] **9.1 Final Summary**
  - **Objective:** Summarize changes and list any manual TODOs (e.g., missing assets).
  - **Output:** Final report and apply instructions.

---

## 3. Artifacts & Deliverables

The agent is expected to produce the following artifacts in the `artifacts/` directory:

| Artifact | Purpose |
| :--- | :--- |
| `site_inventory.json` | Discovered pages, templates, images, components. |
| `landing_dom.json` | Parsed DOM snapshot of landing route. |
| `copy_outline.md` | Section-by-section copy map with intents and CTAs. |
| `keyword_plan.json` | Primary/secondary keywords mapped to sections. |
| `seo_proposals.json` | Proposed titles, descriptions, OG/Twitter tags, JSON-LD, alt text. |
| `code_diffs.patch` | Unified diff to apply changes to the codebase. |
| `validation_report.md` | Validation results, checksums, and checklist. |

