<template>
  <section v-if="data" class="bg-red-200 text-Metric">
    <main class="py-32">
      <div class="w-32 bg-red-200 p-6 m-6" v-for="shop in data" :key="shop._id">
        <a :href="`/shop/${shop.slug.current}`">
          <h1>{{ shop.title }}</h1>
          <img :src="shop.imgurl" :alt="shop.title">
        </a>
      </div>
    </main>
  </section>
</template>

<script setup>
const query = `*[_type == "shop"]`;
const { data } = useSanityQuery(query);
console.log(data);

import { ref } from "vue";
const mobileFiltersOpen = ref(false);
</script>

<style scoped>
</style>
