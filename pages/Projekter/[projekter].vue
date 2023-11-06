<template>
  <div
    v-if="!data || data.length === 0"
    class="flex justify-center items-center h-screen"
  >
    <div class="loader"></div>
  </div>
  <main v-else v-for="story in data" :key="story.id" class="relative isolate">
    <div>
      <div
        class="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#ffffff] opacity-25"
          style="
            clip-path: polygon(
              73.6% 51.7%,
              91.7% 11.8%,
              100% 46.4%,
              97.4% 82.2%,
              92.5% 84.9%,
              75.7% 64%,
              55.3% 47.5%,
              46.5% 49.4%,
              45% 62.9%,
              50.3% 87.2%,
              21.3% 64.1%,
              0.1% 100%,
              5.4% 51.1%,
              21.4% 63.9%,
              58.9% 0.2%,
              73.6% 51.7%
            );
          "
        />
      </div>
      <div
        class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      >
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg
            class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-5xl"
                >
                  {{ story.historieTitle }}
                </h1>

                <p class="mt-6 text-lg leading-8 text-white-700">
                  {{ story.historieText }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          >
            <img
              class="w-[38rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem]"
              :src="story.imgurl"
              alt=""
            />
          </div>
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div class="lg:pr-4">
              <div
                class="max-w-xl text-base leading-7 text-white-700 lg:max-w-lg"
              >
                <div class="sanityBlock">
                  <SanityBlocks
                    :blocks="story.content"
                    :serializers="serializers"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2
        class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
      >
        Følg med i projektet
      </h2>
      <p class="mt-1 text-gray-600 dark:text-gray-400">
        Se trin for trin hvordan projektet er forløbet
      </p>
    </div>
    <div class="mx-auto">
      <div
        v-for="(section, index) in story.sections"
        :key="section._key"
        :class="{
          'bg-smooth text-black': index % 2 === 0,
          'bg-Metric text-white': index % 2 !== 0,
        }"
        class="py-16 mb-12"
      >
        <!-- Billede del -->
        <div class="flex flex-wrap justify-center m-auto max-w-screen-xl">
          <div class="w-full md:w-1/2 px-6 relative">
            <div
              :style="{ backgroundImage: `url('${section.imgurl}')` }"
              class="w-full rounded-lg shadow-md bg-cover bg-center h-[20em]"
            >
              <!-- Nummerering her -->
              <div class="absolute bottom-0 left-6 p-2 bg-white rounded-tr-lg">
                <span class="font-bold text-Metric text-2xl">{{
                  index + 1
                }}</span>
              </div>
            </div>
          </div>

          <!-- Tekst del -->
          <div class="w-full md:w-1/2 px-2">
            <h3 class="text-xl font-semibold mb-3">
              {{ section.sectionTitle }}
            </h3>
            <div>
              <SanityBlocks
                :blocks="section.content"
                :serializers="serializers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { SanityBlocks } from "sanity-blocks-vue-component";

const router = useRouter();
console.log(router);
const projekt = router.currentRoute._rawValue.params.projekter;
const query = groq`*[_type == "smallUserStory" && historieTitle == "${projekt}" ]`;
const { data } = useSanityQuery(query);
console.log("hvad fan", router.currentRoute._rawValue.params.projekter);
console.log("her er det nye", query);

const story = ref({}); // eksempel initial værdi, du kan binde det til en egentlig datakilde

const sectionClass = (index) => {
  if (index === 0) return "cyangreen";
  if (index === 1) return "Metric";
  return "";
};
</script>

<style>
/* Eventuelle styles du vil bruge */
</style>
