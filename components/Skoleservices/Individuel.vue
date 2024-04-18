<template>
  <div class="container mx-auto p-8 grid">
    <h2 class="text-5xl m-auto py-8">Eksempler på individuel indretning</h2>
    <div class="flex flex-row flex-wrap -mx-2">
      <div
        class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2"
        v-for="individual in data"
        :key="individual"
      >
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b max-h-[18em] overflow-hidden">
            <img class="block" :src="individual.imgurl" alt="Card 1" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
const query = groq`*[_type == "individual"]`;
const { data } = useSanityQuery(query);
</script>

<style></style>
