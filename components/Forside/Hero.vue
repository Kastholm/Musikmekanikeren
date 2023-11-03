<template>
  <!-- Hero -->
  <main id="abc" class="w-screen">
    <div
      class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-[7em] relative z-30"
    >
      <!-- Grid -->
      <div
        class="grid place-content-center md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center"
      >
        <div class="relative">
          <h1
            class="block text-3xl relative font-bold text-gray-800 sm:text-4xl md:text-2xl lg:text-6xl lg:leading-tight dark:text-white quote"
          >
            Lad os reparer dit instrument
          </h1>
          <span class="heroBg md:hidden block h-[10em]"></span>
          <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
            Det kræver stor tillid at aflevere sit højtelskede og værdsatte
            instrument til en anden, både til et generelt service-tjek men især
            når det gælder dybere-gående reparationer.
          </p>
          <div class="relative py-8">
            <h3 class="text-2xl">Taylor Certificeret</h3>
            <img
              class="absolute -bottom-2 lg:right-28 rotate-[-20deg] lg:w-[9em] md:w-[8em] md:right-6 sm:w-[10em] w-[6em] right-0"
              src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Logo%20m.m./Taylor%20Guitars%20Logo.png?etag=%22ebde-61d9fdd3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=263%2B200&extract=0%2B0%2B263%2B200"
              alt=""
            />
          </div>
          <!-- Buttons -->
          <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              class="inline-flex justify-center items-center gap-x-3 text-center bg-cyangreen hover:bg-cyangreen border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-white transition py-3 px-4 hover:scale-[1.01]"
              href="#"
            >
              Vælg instrument du ønsker repareret
              <svg
                class="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <p>
              <a
                class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border border-smooth bg-smooth hover:scale-[1.01] shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 text-cyangreen dark:focus:ring-gray-700 w-full"
                href="#"
              >
                Se vores produkter
              </a>
            </p>
          </div>
          <!-- End Buttons -->

          <!-- Review -->
          <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
            <!-- Review -->
            <div class="py-5">
              <div class="flex space-x-1">
                <div class="mx-auto max-w-lg"></div>
              </div>
            </div>
            <!-- End Review -->
          </div>
          <!-- End Review -->
        </div>
        <!-- End Col -->

        <div class="relative ml-4">
          <span
            class="heroBg rounded-sm hidden md:block h-[25em] border-r-8 border-t-8 border-[#304a4d] gradient-border"
          ></span>

          <div
            class="absolute inset-0 -z-[1] bg-gradient-to-tr from-[#304a4d] via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"
          ></div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </main>
  <!-- End Hero -->
</template>

<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";

onMounted(async () => {
  // Register gsap plugin
  gsap.registerPlugin(SplitText);

  var tl = gsap.timeline(),
    mySplitText = new SplitText(".quote", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

  gsap.set(".quote", { perspective: 400 });

  tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });
});
</script>

<style>
.heroBg {
  background-image: url("https://images-ext-1.discordapp.net/external/fdbZQta670jFTyPb0wwIzsR9cRDYDOngtis5xtN44g4/%3Fetag%3D%25221b9763-5be21834%2522%26sourceContentType%3Dimage%252Fjpeg%26quality%3D85/https/musikmekanikeren.dk/____impro/1/onewebmedia/Privat/Musik%2520Mekanikeren%2520Lodning%2520Elektronik.JPG?width=689&height=722");
  @apply bg-cover   relative;
}
#abc {
  background: linear-gradient(to bottom, #222222, #273e3f, #222222, #222222);
}
</style>
