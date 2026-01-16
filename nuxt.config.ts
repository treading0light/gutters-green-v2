// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore - nuxt-security types
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "vercel"
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
      script: [
        {    
          src: 'https://www.googletagmanager.com/gtag/js?id=G-516EPNKBT5',
          async: true,
        },
        {
          id: 'ga-inline',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GDPR: Default to NO tracking
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });

            // Check if user previously accepted cookies
            const consent = localStorage.getItem('cookie-consent');
            if (consent === 'accepted') {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            }

            gtag('config', 'G-516EPNKBT5');
            `,
        }
      ]
    },
  },
  site: { 
    url: 'https://theguttersgreen.com', 
    name: 'The Gutters Green' 
  }, 
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/content', '@nuxt/icon', '@vueuse/nuxt', 'nuxt-nodemailer', 'nuxt-og-image', 'nuxt-security', 'nuxt-studio'],
  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'treading0light',
      repo: 'gutters-green-v2',
      branch: 'main',
      rootDir: '',
      private: true,
    }
  },
  experimental: {
    inlineSSRStyles: true,
  },
  tailwindcss: {
    viewer: false,
  },
  nodemailer: {
    from: '"Tony Green" <tonygreen@theguttersgreen.com>',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'tonygreen@theguttersgreen.com',
      pass: ''
    }
  },
  routeRules: {
    '/api/ask': {
      security: {
        rateLimiter: {
          tokensPerInterval: 10,
          interval: 3600000
        }
      }
    }
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        'base-uri': ["'none'"],
        'font-src': ["'self'", 'https:', 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'frame-src': ["'self'"],
        'img-src': ["'self'", 'data:', 'blob:', 'https://www.google-analytics.com', 'https://*.googletagmanager.com', 'https://avatars.githubusercontent.com', 'https://*.githubusercontent.com', "https://www.healthyfleet.org", "https://*.tile.openstreetmap.org"],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'script-src': ["'self'", 'https:', "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'", "'wasm-unsafe-eval'", 'https://www.googletagmanager.com'],
        'connect-src': ["'self'", 'https://www.google-analytics.com', 'https://*.analytics.google.com', 'https://*.googletagmanager.com', 'https://api.github.com', 'https://api.iconify.design', 'https://api.unisvg.com', 'https://api.simplesvg.com', "https://www.healthyfleet.org", "https://*.tile.openstreetmap.org"],
        'upgrade-insecure-requests': true
      }
    }
  }
})