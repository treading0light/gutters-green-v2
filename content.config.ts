import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        mainImage: z.string().optional(),
        thumbnail: z.string().optional(),
        ogimage: z.string().optional(),
        mainImageAlt: z.string().optional(),
        date: z.string(),
        datetime: z.string(),
        published: z.boolean().default(false),
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
