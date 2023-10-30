<template>
  <div v-for="story in data" :key="story.id" class="py-[20em]">
    <h2>{{ story.historieTitle }}</h2>
    <img :src="story.imgurl" alt="Historie Billede" />
    <p>{{ story.historieText }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

/* 
let storyId = router.currentRoute.value.params.id;
console.log('storyID', storyId) */
const router = useRouter();
console.log(router);
const query = groq`*[_type == "smallUserStory" && historieTitle == "Nummer1" ]`;
const { data } = useSanityQuery(query);

/* const storyData = ref({}); */

/* onMounted(async () => {
  let query;

  query = groq`*[_type == "smallUserStory" && _id == "${storyId}"][0]`; 
  const response = await useSanityQuery(query); 

  storyData.value = response.data;

  console.log(storyData.value); 
}); */
</script>

<style>
/* Eventuelle styles du vil bruge */
</style>
