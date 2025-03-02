// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    static: true,
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  site: { 
    url: 'https://theguttersgreen.com', 
    name: 'The Gutters Green' 
  }, 
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'nuxt-nodemailer',
    'nuxt-og-image'
  ],
  nodemailer: {
    from: '"Tony Green" <tonygreen@theguttersgreen.com>',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'tonygreen@theguttersgreen.com',
      pass: ''
    }
  }
})