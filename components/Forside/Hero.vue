<template>
  <!-- <div class="relative z-30  w-screen" ></div> -->
  <!-- Hero -->
  <main id="abc" class="w-screen h-[40em]">
    <div
      class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-[7em] relative z-30"
    >
      <!-- Grid -->
      <div
        class="grid place-content-center md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center"
      >
        <div>
          <h1
            class="block text-3xl font-bold text-[#3d5f63] sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white quote"
          >
            Lad os reparere dit instrument
          
          </h1>
          <p class="mt-3 text-lg text-white dark:text-gray-400">
            Det kræver stor tillid at aflevere sit højtelskede og værdsatte
            instrument til en anden, både til et generelt service-tjek men især
            når det gælder dybere-gående reparationer.
          </p>

          <!-- Buttons -->
          <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              class="inline-flex justify-center items-center gap-x-3 text-center bg-cyangreen hover:bg-cyangreen border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
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
            <a
              class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-cyangreen hover:bg-cyangreen shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] text-smooth dark:text-cyangreen dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Se vores produkter
            </a>
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
          <span class="heroBg"></span>
         <!--  <img class="absolute -bottom-12 -left-32 rotate-[-20deg] w-[40%]"
        src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Logo%20m.m./Taylor%20Guitars%20Logo.png?etag=%22ebde-61d9fdd3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=263%2B200&extract=0%2B0%2B263%2B200"
        alt=""
      /> -->
          <div
            class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"
          ></div>

          <!-- SVG-->
          <div class="absolute bottom-0 left-0">
            <svg
              class="w-2/3 ml-auto h-auto text-white dark:text-slate-900"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="531" y="352" width="99" height="99" fill="#fbfbfb" />
              <rect x="140" y="352" width="106" height="99" fill="#fbfbfb" />
              <rect x="482" y="402" width="64" height="49" fill="#fbfbfb" />
              <rect x="433" y="402" width="63" height="49" fill="#fbfbfb" />
              <rect x="384" y="352" width="49" height="50" fill="#fbfbfb" />
              <rect x="531" y="328" width="50" height="50" fill="#fbfbfb" />
              <rect x="99" y="303" width="49" height="58" fill="#fbfbfb" />
              <rect x="99" y="352" width="49" height="50" fill="#fbfbfb" />
              <rect x="99" y="392" width="49" height="59" fill="#fbfbfb" />
              <rect x="44" y="402" width="66" height="49" fill="#fbfbfb" />
              <rect x="234" y="402" width="62" height="49" fill="#fbfbfb" />
              <rect x="334" y="303" width="50" height="49" fill="#fbfbfb" />
              <rect x="581" width="49" height="49" fill="#fbfbfb" />
              <rect x="581" width="49" height="64" fill="#fbfbfb" />
              <rect x="482" y="123" width="49" height="49" fill="#fbfbfb" />
              <rect x="507" y="124" width="49" height="24" fill="#fbfbfb" />
              <rect x="531" y="49" width="99" height="99" fill="#fbfbfb" />
            </svg>
          </div>
          <!-- End SVG-->
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
import * as THREE from "three";
/* import p5 from "p5"; */
/* import * as P5 from "p5"; */
import FOG from "vanta/dist/vanta.fog.min";

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

  // window is only avaiable on browser
  /*  if (process.browser) { */
  window.THREE = THREE;
  const { default: FOG } = await import("vanta/dist/vanta.fog.min");
  FOG({
    el: "#abc",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x222222,
    midtoneColor: 0x273e3f,
    lowlightColor: 0x222222,
    baseColor: 0x222222,
    scale: 1.0,
    size: 5.0,
    speed: 0.9,
    THREE: window.THREE,
  });
  /*  } */
});
</script>

<style>
.heroBg {
  background-image: url("https://images-ext-1.discordapp.net/external/fdbZQta670jFTyPb0wwIzsR9cRDYDOngtis5xtN44g4/%3Fetag%3D%25221b9763-5be21834%2522%26sourceContentType%3Dimage%252Fjpeg%26quality%3D85/https/musikmekanikeren.dk/____impro/1/onewebmedia/Privat/Musik%2520Mekanikeren%2520Lodning%2520Elektronik.JPG?width=689&height=722");
  @apply bg-cover block  h-[25em] relative;
}
/* 
.heroShadow {
     @apply bg-black/0 h-[35em] relative;
}
.heroBg span {
     @apply block text-[14em] absolute left-4 bottom-0 leading-[.8em];
} */
</style>
