<template>
  <section>
    
   <!--  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2
        class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
      >
        Customer stories
      </h2>
      <p class="mt-1 text-gray-600 dark:text-gray-400">
        See how game-changing companies are making the most of every engagement
        with Preline.
      </p>
    </div>
  
    <Swiper
      class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 4000,
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
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :breakpoints="{}"
    >
      <SwiperSlide v-for="story in data" :key="story.id" class="slider">
        <div>
        
          <div
            class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
            style="min-height: 23rem"
          >
            <div
              class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              style="min-height: 23rem"
            >
              <img
                class="absolute inset-0 w-full h-full object-cover object-center"
                :src="story.imgurl"
                alt=""
              />
              <div class="absolute inset-0 w-full h-full"></div>
              
            </div>
            <div
              class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg"
            >
              <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                <p class="text-gray-600">
                  <span class="text-gray-900">{{ story.historieText }}</span>
                </p>
              </div>
              <svg
                class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </Swiper> -->
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
const query = groq`*[_type == "bigUserStory"]`;
const { data } = useSanityQuery(query);
console.log(data);
</script>

<style scoped>
/* .slider {
  display: inline-block;
  padding: 20px;

  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.5s ease,
    box-shadow 0.5s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.slider:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
} */
</style>
