<script setup>
import { testimonialsdata } from "../../assets/json/testimonials.json";
const query = groq`*[_type == "testimonials"]`;
const { data } = useSanityQuery(query);
</script>
<template>
  <section class="testi_section">
<h2 class="bg-cyangreen text-slate-200">5 Stjerner på Trustpilot</h2>

    <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="3"
    :loop="true"
    
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="testimonials in data" v-bind:key="testimonials._id"  >
     <div class="testi_container" >
     <span class="testi_box" >
          <h3>{{testimonials.navn}} - {{testimonials.by}}</h3>
          <img class="w-24 bg-smooth my-1" loading="lazy" width="85" height="17" src="/img/stars.gif" alt="">
          <blockquote>{{testimonials.anmeldelse}}</blockquote>
     </span>
     </div>
    </SwiperSlide>
  </Swiper>


</section>
</template>

<style>
.testi_section {
     @apply text-center bg-smooth text-Metric ;
}
.testi_section h2 {
     @apply text-4xl py-4;
}
.testi_container  {
     @apply flex place-content-center lg:flex lg:columns-3 lg:justify-center text-left  h-64;
}
.testi_container span {
     @apply /* lg:w-1/3 */  p-6 border-l mx-2 my-4 /* border-l-orange-500 */ grid text-left ;
     place-content: start center;
     
}
.testi_container h3 {
     @apply font-bold text-lg;
}
.swiper-slide-prev{
 /*  @apply bg-blue-400; */
}
.swiper-slide-active{
  /* @apply bg-green-400; */
}
.swiper-slide-next{
  @apply  border-x-orange-500 ;
  transition: .3s;

}
</style>