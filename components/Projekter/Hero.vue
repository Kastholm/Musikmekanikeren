<template>
  <!-- Hero -->
  <div class="max-w-[85rem] mx-auto z-20 px-4 sm:px-6 lg:px-8 pt-[7em] mb-24">
    <!-- Grid -->
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1
          class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
        >
          Se tidligere projekter
        </h1>
        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
          Personligt har jeg det på samme måde, når jeg afleverer bilen hos
          mekanikeren - man ønsker den tilbage så den både øles, kører og ser ud
          i sin bedst mulige stand! Jeg tager hver enkelt opgave meget seriøst
          og sætter en ære i at fastholde mit gode ry og rygte.
          <br />
          <br />
          I selve arbejdet anvender jeg kun de bedste værktøjer og metoder til
          den pågældende opgave og yder altid fuld garanti på alle udførte
          opgaver! Musik Mekanikeren's værksted har til huse i ny-renoverede
          lokaler som er special-indrettede til instrument-reparation - du kan
          derfor være helt tryg ved at dit musikudstyr bliver både opbevaret og
          serviceret helt forsvarligt.
        </p>
      </div>
      <!-- End Col -->

      <div class="relative ml-4">
          <span class="heroBg hidden md:block h-[25em] border-r-8 border-t-8 border-[#304a4d] gradient-border"></span>

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

<style>

#abc {
  background: linear-gradient(to bottom, #222222, #273e3f, #222222, #222222);
}

.gradient-border {
  position: relative;
  padding-bottom: 8px; /* Adjust as needed */
  
}

.gradient-border::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 8px; /* Border width */
  height: 100%;
  background: linear-gradient(to top, rgba(48, 74, 77, 0), rgba(48, 74, 77, 1)); /* Adjust color and opacity */
}

.gradient-border::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 8px; /* Border height */
  background: linear-gradient(to right, rgba(48, 74, 77, 0), rgba(48, 74, 77, 1)); /* Adjust color and opacity */
  }
  </style>
