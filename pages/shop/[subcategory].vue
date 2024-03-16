<template>
  <main class="py-32 bg-red-200">
    <div v-for="item in data" :key="item._id">
      <h1>{{ item.title }}</h1>
      <div v-for="section in item.sections" :key="section._key">
        <h2>{{ section.shoptitle }}</h2>
        <!-- Antager at du vil vise den første imgurl for hver sektion -->
        <img :src="section.imgurl" alt="Billede for sektion">
        <!-- Hvis der er flere imgurl'er indenfor samme sektion, skal du tilføje en yderligere loop her -->
      </div>
    </div>
  </main>


<div class="container mx-auto p-8 pt-0 md:pt-8">
  <div class="flex flex-row flex-wrap -mx-2">
    <div
      v-for="item in data" :key="item._id"
      class="w-full md:w-1/2 xl:w-1/3 mb-12 px-2 hover:scale-[1.005] hover:shadow-black cursor-pointer transition-transform"
    >
      <!-- <NuxtLink
        class="stretched-link text-gray-800"
        :to="'/Service/' + item.slug.current + '?type=' + item.slug.current"
        title="Card 1"
      > -->
        <div class="relative bg-white rounded border">
          <picture
            class="block bg-gray-200 border-b max-h-[200px] min-h-[200px] overflow-hidden"
          >
            <!-- Antager at du vil vise item.imgurl, ellers ændr til section.imgurl indeni en nested loop -->
            <img class="block" :src="item.imgurl" :alt="item.title" />
          </picture>
          <div class="p-4 relative">
            <h3
              class="text-2xl font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
            >
              {{ item.title }}
            </h3>
            <!-- Loop over sections for hver item for at vise beskrivelsen -->
            <div v-for="section in item.sections" :key="section._key">
              <p
                class="text-gray-800 readMore max-h-[150px] min-h-[150px] overflow-hidden"
                :class="{ expanded: section.expanded }"
                @click="section.expanded = !section.expanded"
              >
                {{ section.shoptitle }} <!-- Eller en anden felt fra section du vil vise -->
              </p>
            </div>
          </div>
        <!-- </NuxtLink> -->
      </div>
    </div>
  </div>
</div>





</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();

const slug = route.params.subcategory;
console.log(slug, "slug");
const query = `*[(_type == "shop") && (slug.current == "${slug}")]`;
const { data } = useSanityQuery(query);
console.log(data, "data");

const mobileFiltersOpen = ref(false);
</script>

<style scoped></style>
