# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Nuxt 3 business website for The Gutters Green, a gutter installation, cleaning, and repair company serving the Seattle-Tacoma area. The site features a git-based CMS blog using Nuxt Content, dynamic service area pages, and integrates with OpenAI for customer chat support.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview

# Create a new blog post
npm run createBlogPost <kebab-case-title>
# Example: npm run createBlogPost gutter-maintenance-tips
# Creates content/blog/<title>.md and public/images/blog/<title>/ directory
```

## Architecture

### Service Area System

The site dynamically generates service pages for multiple cities and counties using a data-driven approach:

- **Data files** (`data/`): Contains structured area data for each service type
  - `gutter-installation-areas.ts`
  - `gutter-cleaning-areas.ts`
  - `roof-cleaning-areas.ts`

- **Composable** (`composables/useServiceAreas.ts`): Provides methods to query area data
  - `getArea(slug)` - Get city or county info by slug
  - `getCounties()` - Get all counties
  - `getCities()` - Get all cities (flattened)

- **Dynamic pages**: Use catch-all routes `[[area]].vue` to render area-specific content
  - `/gutter-installation/[[area]].vue`
  - `/roof-cleaning/[[area]].vue`
  - Route params determine which area data to display
  - Falls back to default area (Federal Way) if no slug provided
  - Redirects to base service page if invalid slug

### Content Management

- **Blog posts**: Markdown files in `content/blog/` with frontmatter
- **Custom components**: Available in markdown via `components/content/`
  - `BeforeAfter.vue` - Before/after image slider
  - `CTA.vue` - Call-to-action blocks
  - `MdCarousel.vue` - Image carousel
  - Custom OG image component: `OgImage/GutterOg.vue`

### API Routes

All API routes are in `server/api/`:
- `ask.post.ts` - OpenAI chat integration (rate limited: 10 requests/hour)
- `send-email.post.js` - Contact form email handler (uses nodemailer)
- `get-reviews.get.js` - Fetches customer reviews
- `log-chat.js` - Logs chat interactions

### Deployment

- **Platform**: Vercel (configured via `nitro.preset: "vercel"`)
- **SSR**: Enabled (`ssr: true`)
- **Environment variables**: Define in `.env` (not committed)
  - SMTP credentials for nodemailer
  - OpenAI API key for chat feature
  - Base URL override via `NUXT_APP_BASE_URL`

## Tech Stack

- **Framework**: Nuxt 3 with SSR
- **Styling**: Tailwind CSS + DaisyUI components
- **Content**: Nuxt Content for markdown-based blog
- **Icons**: Heroicons via `@heroicons/vue`
- **Images**: `@nuxt/image` for optimization
- **Map**: Leaflet for service area visualization
- **Security**: `nuxt-security` module with rate limiting
- **SEO**: `nuxt-og-image` for dynamic social images

## Key Patterns

### Adding a New Service Area

1. Add area data to appropriate file in `data/` (follow existing structure)
2. Include `slug`, `name`, `heroTitle`, and `heroText` fields
3. The dynamic page will automatically render the new area

### Creating Custom Content Components

1. Create Vue component in `components/content/`
2. Use PascalCase naming (e.g., `MyComponent.vue`)
3. Component is automatically available in markdown as `<MyComponent />`

### Modifying SEO/Meta

- Global head config: `nuxt.config.ts` → `app.head`
- Page-specific: Use `useHead()` composable in page `<script setup>`
- OG images: Use `defineOgImageComponent()` with custom template

## Important Notes

- Service area pages use `[[area]]` catch-all syntax (double brackets make it optional)
- All gutters are "5K seamless" style per business branding
- Primary color is green (`#166534`) reflecting company name
- Blog posts require `published: true` in frontmatter to appear
- nodemailer password must be set in `nuxt.config.ts` or via env var
