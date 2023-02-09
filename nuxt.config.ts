// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     
          modules: [
            '@nuxtjs/tailwindcss',
            ['nuxt-swiper', {
              prefix: 'Swiper',
            }],
            '@nuxtjs/sanity'
          ],
          sanity: {
            projectId: "Musikmekanikeren",
            apiVersion: '2022-03-25'
          },
          
});
    