import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        mainImage: z.string().optional().describe('Main header image URL'),
        thumbnail: z.string().optional().describe('Thumbnail for blog listings'),
        ogimage: z.string().optional().describe('Social media preview image'),
        mainImageAlt: z.string().optional().describe('Alt text for accessibility'),
        date: z.string().describe('Display date (e.g., "Jan 20, 2025")'),
        datetime: z.string().describe('ISO date (e.g., "2025-01-20")'),
        published: z.boolean().default(false).describe('Show on website'),
        category: z.object({
          title: z.string(),
          href: z.string()
        }).optional(),
        author: z.object({
          name: z.string(),
          role: z.string(),
          href: z.string(),
          imageUrl: z.string()
        }).optional()
      })
    })
  }
})
