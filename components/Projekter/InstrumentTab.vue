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
    <div class="flex flex-row flex-wrap -mx-2">
      <div
        v-for="story in data"
        :key="story.id"
        class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2"
      >
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <img class="block" :src="story.imgurl" alt="Card Image" />
            </picture>
            <div class="p-4">
              <NuxtLink :to="`/projekter/${story.historieTitle }`">
                <h3 class="text-lg font-bold">
                  <a
                    class="stretched-link text-gray-900"
                    :title="story.historieTitle"
                  >
                    {{ story.historieTitle }}
                  </a>
                </h3>
              </NuxtLink>

              <time
                class="block mb-2 text-sm text-gray-600"
                datetime="2019-01-01"
                >{{ story.historieDate }}</time
              >
              <p class="text-gray-800">
                {{ story.historieText }}
              </p>
              <span class="stretched-link text-[2rem] text-gray-800">{{
                story.title
              }}</span>
            </div>
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
