// nuxt.config.ts
import { defineNuxtModule } from 'nuxt'


export default defineNuxtConfig({
modules: [ "@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxtjs/sanity"],
build: {
  transpile: ['gsap'],
},
sanity: {
  projectId: "1f5ltia2",
  apiVersion: '2022-03-25'
},
swiper: {
  prefix: 'Swiper'
  // Swiper options
  //----------------------
  // ,
  // styleLang: 'css',
  // modules: ['navigation', 'pagination'], // all modules are imported by default
}
});
    