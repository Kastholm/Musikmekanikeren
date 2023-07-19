<script setup>
const query = groq`*[_type == "testimonials"]`;
const { data } = useSanityQuery(query);

// Detect device screen width
const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let slidesPerView = 3; // Default value for larger screens

// Adjust slidesPerView based on device screen width
if (screenWidth < 768) {
  // Mobile breakpoint
  slidesPerView = 1;
} else if (screenWidth < 1024) {
  // Tablet breakpoint
  slidesPerView = 2;
}
</script>
<template>
  <section class="testi_section">
    <div class="grid place-content-center">
      <h2 class="testi_h2">
        Musik Mekanikeren er Autoriseret Servicecenter for
      </h2>
    </div>

    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="slidesPerView"
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
      <SwiperSlide v-for="testimonials in data" v-bind:key="testimonials._id">
        <div class="testi_container">
          <span class="testi_box">
            <h3>{{ testimonials.navn }} - {{ testimonials.by }}</h3>
            <img
              class="w-24 bg-smooth my-1"
              loading="lazy"
              width="85"
              height="17"
              src="/img/stars.gif"
              alt=""
            />
            <blockquote>{{ testimonials.anmeldelse }}</blockquote>
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
    <img
      class="m-auto pb-8 w-[13em]"
      src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Logo%20m.m./Taylor%20Guitars%20Logo.png?etag=%22ebde-61d9fdd3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=263%2B200&extract=0%2B0%2B263%2B200"
      alt=""
    />
    <!-- <div class="bg-red-200 grid place-content-center">
      <h2>Musik Mekanikeren er Autoriseret Servicecenter for</h2>
      <img
        src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Logo%20m.m./Taylor%20Guitars%20Logo.png?etag=%22ebde-61d9fdd3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=263%2B200&extract=0%2B0%2B263%2B200"
        alt=""
      />
    </div> -->
  </section>
</template>

<style>
.testi_section {
  @apply text-center bg-smooth text-Metric;
}
.testi_section h2 {
  @apply text-2xl py-8 md:text-4xl md:py-4 md:px-4;
}
.testi_section h2::after {
  @apply block w-1/2 mx-auto mt-2 h-1 bg-gray-100;
  content: "";
}
.testi_container {
  @apply flex place-content-center lg:flex lg:columns-3 lg:justify-center text-left  h-64;
}
.testi_container span {
  @apply /* lg:w-1/3 */  p-6 border-l mx-2 my-4 /* border-l-orange-500 */ grid text-left;
  place-content: start center;
}
.testi_container h3 {
  @apply font-bold text-lg;
}
.swiper-slide-prev {
  /*  @apply bg-blue-400; */
}
.swiper-slide-active {
  /* @apply bg-green-400; */
}
.swiper-slide-next {
  @apply border-x-orange-500;
  transition: 0.3s;
}
</style>
