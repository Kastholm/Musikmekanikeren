<template>
  <div class="container mx-auto p-8">
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
    <div class="grid -mx-2 overflow-hidden">
      <div v-for="story in data" :key="story.id" class="w-full mb-4 px-2">
        <div class="relative bg-white rounded border">
          <NuxtLink :to="`/projekter/${story.historieTitle}`">
            <div class="grid lg:grid-cols-2">
              <div class="p-4">
                <h3 class="text-2xl lg:text-3xl font-bold">
                  <a
                    class="stretched-link text-gray-900"
                    :title="story.historieTitle"
                  >
                    {{ story.historieTitle }}
                  </a>
                </h3>

                <time
                  class="block mb-2 text-sm text-gray-600"
                  datetime="2019-01-01"
                  >{{ story.historieDate }}</time
                >
                <p class="text-gray-800 text-sm lg:text-lg">
                  {{ story.historieResume }} <br> <span class="stretched-link text-xl bg-cyangreen bg-opacity-80 text-[#fbfbfb] p-2 absolute bottom-4">Læs Mere</span>
                </p>
                <p>L;s mere</p>
                <span class="stretched-link text-[2rem] text-gray-800">{{
                  story.title
                }}</span>
              </div>
              <div
                class="overflow-hidden ml-[4em] rounded-tl-4xl grid place-content-center lg:h-[22em]"
              >
                <img
                  class="lg:rotate-90 w-fit -mt-60 lg:mt-0 lg:w-[22em] lg:h-full lg:ml-20 "
                  :src="story.imgurl"
                  style="clip-path: circle(90.5% at 95% 23%);"
                  alt="Card Image"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const query = groq`*[_type == "smallUserStory"]`;
const { data } = useSanityQuery(query);
console.log(data);
</script>

<style>
/* Eventuelt kan du tilføje mere specifik styling her */
</style>
