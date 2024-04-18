<template>
  <!-- Hero -->
  <div class="max-w-[85rem] mx-auto z-20 px-4 mb-12 sm:px-6 lg:px-8 pt-[7em]">
    <!-- Grid -->
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1
          class="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
        >
          Hvorfor vælge Musik mekanikeren?
        </h1>
        <p class="mt-3 text-lg text-white dark:text-gray-400">
          Personligt har jeg det på samme måde, når jeg afleverer bilen hos
          mekanikeren - man ønsker den tilbage så den både føles, kører og ser
          ud i sin bedst mulige stand! Jeg tager hver enkelt opgave meget
          seriøst og sætter en ære i at fastholde mit gode ry og rygte.
          <br />
          <br />
          I selve arbejdet anvender jeg kun de bedste værktøjer og metoder til
          den pågældende opgave og yder altid fuld garanti på alle udførte
          opgaver! Musik Mekanikeren's værksted har til huse i ny-renoverede
          lokaler som er special-indrettede til instrument-reparation - du kan
          derfor være helt tryg ved at dit musikudstyr bliver både opbevaret og
          serviceret helt forsvarligt.
        </p>

        <!-- Buttons -->
        <!--   <div class="mt-7 grid gap-3 w-full sm:inline-flex">
        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-cyangreen hover:bg-cyangreen border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
          Get started
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
        <a class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] text-cyangreen  dark:text-cyangreen dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" href="#">
          Contact sales team
        </a>
      </div> -->
        <!-- End Buttons -->
      </div>
      <!-- End Col -->

      <div class="relative ml-4">
          <span class="heroBg rounded-sm block h-[25em] border-r-8 border-t-8 border-[#304a4d] gradient-border"></span>

          <div
            class="absolute inset-0 -z-[1] bg-gradient-to-tr from-[#304a4d] via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"
          ></div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Hero -->
</template>

<script setup></script>

<style scoped>
.heroBg {
  background-image: url("https://i.ibb.co/PrVJSWW/Fender-Contemporary-Stratocaster-24-Musik-Mekanikeren.jpg");
  @apply bg-cover   relative;
}
</style>
