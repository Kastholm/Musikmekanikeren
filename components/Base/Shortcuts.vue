<template>
  <!-- Card Blog -->
  <div
    class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative bg-white border-cyangreen border-8"
  >
  
  
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14 relative">
      <h2 class="relative text-2xl w-[20em] font-bold md:text-4xl md:leading-tight dark:text-cyangreen text-slate-900"
      >
        En passion for håndværket
      </h2>
     
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[85rem] m-auto">
      <div>
        </div>
      <img
            class="w-full h-full absolute top-0 left-0 clip-path2"
            src="https://i.ibb.co/9WCCVTj/solid-color-image.jpg"
            alt="Image Description"
          />
          <img
            class="w-full h-full absolute top-0 left-0 path3"
            src="https://i.ibb.co/9WCCVTj/solid-color-image.jpg"
            alt="Image Description"
          />
      <!-- Card -->
      <a class="group rounded-xl overflow-hidden" href="#">
        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img
            class="clip-path w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border border-8"
            src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Privat/Kaares%20f%C3%B8rste%20trommes%C3%A6t.png?etag=%22392709-56a77a82%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=458%2B309&extract=0%2B10%2B456%2B296"
            alt="Image Description"
          />
        </div>

        <div class="mt-7 relative">
          <h3
            class="relative text-xl font-semibold text-cyangreen group-hover:text-cyangreen dark:text-cyangreen pt-10"
          >
            Hvem er jeg ?
          </h3>
          <p class="relative mt-3 text-cyangreen dark:text-cyangreen whitespace-normal">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p
            class="relative mt-5 inline-flex items-center gap-x-1.5 text-smooth text-xs p-2 decoration-2 group-hover:underline font-medium bg-cyangreen rounded-xl"
          >
            Læs mere om os
            <svg
              class="relative w-2.5 h-2.5"
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
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a
        class="group relative flex flex-col ml-9 w-[20em] h-[9rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-cyangreen"
        href="#"
      >
        <div class="flex-auto p-4 md:p-6">
          <h3 class="text-xl text-white/[.9] group-hover:text-white whitespace-normal text-left">
            <span class="font-bold text-2xl">Se vores projekter -> </span> 
            <p>
              Specielt inventar har passeret værkstedet igennem årene
            </p>
          </h3>
        </div>
        <div class="pt-0 p-4 md:p-6">
          <div
            class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]"
          >
            Visit the site
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
      </a>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
</template>

<script>
export default {};
</script>

<style>
.clip-path {
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 24% 75%, 25% 96%, 8% 75%, 0% 75%);
}
.clip-path2 {
  clip-path: polygon(20% 0, 27% 0, 29% 27%, 62% 39%, 78% 63%, 96% 77%, 91% 100%, 83% 100%, 77% 67%, 34% 60%);
}
.path3 {
  clip-path: polygon(0 36%, 25% 18%, 32% 43%, 21% 33%, 4% 55%, 15% 80%, 11% 100%, 6% 100%, 7% 78%, 0 65%);




}
</style>
