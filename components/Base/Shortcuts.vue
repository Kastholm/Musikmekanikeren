<template>
  <!-- Card Blog -->
  <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative bg-smooth">
    <!-- Title -->

    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[85rem] m-auto">
      <!-- Card -->
      <div class="group rounded-xl overflow-hidden">
        <NuxtLink to="/projekter">
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://musikmekanikeren.dk/____impro/1/onewebmedia/S%C3%A6rlige%20projekter/Kasuga%20Les%20Paul%20Custom/Kasuga%20Les%20Paul%20Custom%202.jpg?etag=%22343f20-5c599b59%22&sourceContentType=image%2Fjpeg&rotate=270&ignoreAspectRatio&resize=670%2B503&extract=0%2B117%2B670%2B295&quality=85"
              alt="Image Description"
            />
          </div>

          <div class="mt-7">
            <h3
              class="text-xl font-semibold text-cyangreen group-hover:text-cyangreen dark:text-cyangreen"
            >
              Projekter
            </h3>
            <p
              class="mt-3 text-cyangreen dark:text-cyangreen whitespace-normal"
            >
              Få indblik i nogle gode historier & billedserier for spændende
              instrumenter som har været igennem værkstedet..
            </p>
            <p
              class="mt-5 inline-flex items-center gap-x-1.5 text-[#304a4d] decoration-2 group-hover:underline font-medium"
            >
              Læs mere
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
            </p>
          </div>
        </NuxtLink>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="group rounded-xl overflow-hidden">
        <NuxtLink to="/omos">
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://cdn.sanity.io/images/1f5ltia2/production/bec2a80accedc5aff617f848f9340cd73ee153fa-1360x1008.jpg"
              alt="Image Description"
            />
          </div>

          <div class="mt-7">
            <h3
              class="text-xl font-semibold text-cyangreen group-hover:text-cyangreen dark:text-cyangreen"
            >
              Hvem står bag Musik Mekanikeren?
            </h3>
            <p
              class="mt-3 text-cyangreen dark:text-cyangreen whitespace-normal"
            >
              Læs mere om mig og min erfaring med musikinstrumenter og
              forstærkere igennem <br />de sidste 16 år..
            </p>
            <p
              class="mt-5 inline-flex items-center gap-x-1.5 text-[#304a4d] decoration-2 group-hover:underline font-medium"
            >
              Læs mere
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
            </p>
          </div>
        </NuxtLink>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div
        class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://i.ibb.co/JHHXnF2/chris-hardy-xu-47ojzho8-unsplash.jpg')]"
      >
        <NuxtLink to="/kontakt">
          <div class="flex-auto p-4 md:p-6 h-full">
            <h3
              class="text-xl text-white/[.9] group-hover:text-white whitespace-normal"
            >
              <span class="font-bold text-3xl">Kontakt os her på siden</span>
              <p class="text-xltranslate-y-4">
                Vi hjælper dig med alt der omhandler instrumenter og forstærkere
              </p>
            </h3>
          </div>
          <div class="h-full pt-14">
            <div
              class="inline-flex gap-2 text-sm font-medium text-white group-hover:text-white/[.7] h-full items-end lg:-translate-y-0 -translate-y-[320px]"
            >
              Kontakt
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
            </div>
          </div>
        </NuxtLink>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
</template>

<script>
export default {};
</script>

<style></style>
