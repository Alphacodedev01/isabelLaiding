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
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap'
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          key: 'description',
          name: 'description', 
          content: 'Hotel Isabel ofrece apartamentos y habitaciones confortables en Cali. Ubicados en Cra. 19 #4a - 20, Los Libertadores. Contáctanos al 3015409480.'
        },
        {
          key: 'keywords',
          name: 'keywords',
          content: 'hotel isabel, apartamentos cali, habitaciones familiares, alojamiento cali, los libertadores cali'
        },
        {
          key: 'address',
          name: 'address',
          content: 'Cra. 19 #4a - 20, Los Libertadores, Cali, Valle del Cauca'
        },
        {
          key: 'telephone',
          name: 'telephone',
          content: '3015409480'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://linktr.ee/apartasuitesisabel' }
      ]
    }
  }
})
