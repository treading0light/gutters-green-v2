// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'nuxt-nodemailer'
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