// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Hotel Isabel - Tu hogar lejos de casa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          key: 'description',
          name: 'description', 
          content: 'Hotel Isabel ofrece habitaciones confortables y servicios de primera clase para hacer de tu estadía una experiencia inolvidable.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
