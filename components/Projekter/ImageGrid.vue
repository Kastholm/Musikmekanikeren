<template>
  <section>
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
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
    <!-- End Title -->
    <Swiper
      class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      :slides-per-view="3"
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
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }"
    >
      <SwiperSlide class="slider">
        <div>
          <!-- Card -->
          <a class="group rounded-xl p-5 transition-all" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img
                class="min-w-[18em] max-w-[25em] m-auto object-contain rounded-xl"
                src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Fender%20Contemporary%20Stratocaster/Fender%20Contemporary%20Stratocaster%2054%20Musik%20Mekanikeren.jpg?etag=%2235a442-5c6468d8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=435%2B580&extract=77%2B134%2B283%2B446&quality=85"
                alt="Image Description"
              />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300">
              instrument
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 transition ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </a>
          <!-- End Card -->
        </div>
      </SwiperSlide>
      <SwiperSlide class="slider">
        <div>
          <!-- Card -->
          <a class="group rounded-xl p-5 transition-all" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img
                class="min-w-[18em] max-w-[25em] m-auto object-contain rounded-xl"
                src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Fender%20Contemporary%20Stratocaster/Fender%20Contemporary%20Stratocaster%2054%20Musik%20Mekanikeren.jpg?etag=%2235a442-5c6468d8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=435%2B580&extract=77%2B134%2B283%2B446&quality=85"
                alt="Image Description"
              />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300">
              instrument
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 transition ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </a>
          <!-- End Card -->
        </div>
      </SwiperSlide>
      <SwiperSlide class="slider">
        <div>
          <!-- Card -->
          <a class="group rounded-xl p-5 transition-all" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img
                class="min-w-[18em] max-w-[25em] m-auto object-contain rounded-xl"
                src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Fender%20Contemporary%20Stratocaster/Fender%20Contemporary%20Stratocaster%2054%20Musik%20Mekanikeren.jpg?etag=%2235a442-5c6468d8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=435%2B580&extract=77%2B134%2B283%2B446&quality=85"
                alt="Image Description"
              />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300">
              instrument
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 transition ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </a>
          <!-- End Card -->
        </div>
      </SwiperSlide>
      <SwiperSlide class="slider">
        <div>
          <!-- Card -->
          <a class="group rounded-xl p-5 transition-all" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img
                class="min-w-[18em] max-w-[25em] m-auto object-contain rounded-xl"
                src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Fender%20Contemporary%20Stratocaster/Fender%20Contemporary%20Stratocaster%2054%20Musik%20Mekanikeren.jpg?etag=%2235a442-5c6468d8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=435%2B580&extract=77%2B134%2B283%2B446&quality=85"
                alt="Image Description"
              />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300">
              instrument
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 transition ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </a>
          <!-- End Card -->
        </div>
      </SwiperSlide>
      <SwiperSlide class="slider">
        <div>
          <!-- Card -->
          <a class="group rounded-xl p-5 transition-all" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img
                class="min-w-[18em] max-w-[25em] m-auto object-contain rounded-xl"
                src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Fender%20Contemporary%20Stratocaster/Fender%20Contemporary%20Stratocaster%2054%20Musik%20Mekanikeren.jpg?etag=%2235a442-5c6468d8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=435%2B580&extract=77%2B134%2B283%2B446&quality=85"
                alt="Image Description"
              />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300">
              instrument
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 transition ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </a>
          <!-- End Card -->
        </div>
      </SwiperSlide>
      <SwiperSlide class="slider">
        <div>
          <!-- Card -->
          <a class="group rounded-xl p-5 transition-all" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img
                class="min-w-[18em] max-w-[25em] m-auto object-contain rounded-xl"
                src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Fender%20Contemporary%20Stratocaster/Fender%20Contemporary%20Stratocaster%2054%20Musik%20Mekanikeren.jpg?etag=%2235a442-5c6468d8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=435%2B580&extract=77%2B134%2B283%2B446&quality=85"
                alt="Image Description"
              />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300">
              instrument
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 transition ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </a>
          <!-- End Card -->
        </div>
      </SwiperSlide>
      <SwiperSlide class="slider">
        <div>
          <!-- Card -->
          <a class="group rounded-xl p-5 transition-all" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img
                class="min-w-[18em] max-w-[25em] m-auto object-contain rounded-xl"
                src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Fender%20Contemporary%20Stratocaster/Fender%20Contemporary%20Stratocaster%2054%20Musik%20Mekanikeren.jpg?etag=%2235a442-5c6468d8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=435%2B580&extract=77%2B134%2B283%2B446&quality=85"
                alt="Image Description"
              />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300">
              instrument
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 transition ease-in-out"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </a>
          <!-- End Card -->
        </div>
      </SwiperSlide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </Swiper>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
</script>

<style scoped>
.slider {
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
}
</style>
