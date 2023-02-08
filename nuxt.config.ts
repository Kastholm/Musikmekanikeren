// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     
          modules: [
            '@nuxtjs/tailwindcss', 
            '@nuxtjs/strapi',
            ['nuxt-swiper', {
              prefix: 'Swiper',
            }]
          ],
          strapi: {
            // entities: ['restaurants', 'categories'],
            url: process.env.STRAPI_URL || 'http://localhost:1337', //3000 maybe
            prefix: '/api',
            version: 'v4',
            cookie: {},
            cookieName: 'strapi_jwt'
          }, 
})
    