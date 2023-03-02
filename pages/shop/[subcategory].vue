<template>
  <section class="bg-white dark:bg-gray-900">
    <h1>Product details for {{ subcategory }}</h1>
     <!-- animate-pulse -->
   <div v-for="category in data" v-bind:key="category._id" class="w-full">
    <p> Sanity = {{category.title}} Nuxt = {{subcategory}} </p> 
   <div v-if="subcategory == category.title">
    <div v-if='category.categories'>
   <h1>{{ category.categories }} braa</h1>
   </div>
   <div v-else>
   <h1>Ingen underkategorier endnu</h1>
   </div>
   </div>
   </div>
</section>
</template>

<script setup>
const { subcategory } = useRoute().params;

const query = `*[_type == "category"]`
const { data } = useSanityQuery(query);
console.log(data)

</script>
