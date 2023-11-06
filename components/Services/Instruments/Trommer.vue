<template>
  <div class="container mx-auto p-8 pt-0 md:pt-8">
    <div v-if="!data" class="flex justify-center items-center">
      <div class="loader"></div>
    </div>
    <div v-else class="flex flex-row flex-wrap -mx-2">
      <div
        v-for="trommer in data"
        :key="trommer._id"
        class="w-full md:w-1/3 lg:w-1/4 mb-12 px-2 hover:scale-[1.005] hover:shadow-black"
      >
              <NuxtLink
                class="stretched-link text-[2rem] text-gray-800"
                :to="'/Service/' + trommer.title + '?type=trommer'"
                title="Card 1"
              >
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img class="block" :src="trommer.imgurl" :alt="trommer.title" />
          </picture>
          <div class="p-4 relative">
            <h3
              class="text-2xl font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
            >
                {{ trommer.title }}
            </h3>
            <!-- <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01"
              >1st January 2019</time
            > -->
            <p
              class="text-gray-800 readMore"
              :class="{ expanded: trommer.expanded }"
              @click="trommer.expanded = !trommer.expanded"
            >
              {{ trommer.description }}
            </p>
          </div>
        </div>
              </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "trommer"]`;
const { data } = useSanityQuery(query);
import { useRouter } from "vue-router";
const router = useRouter();
const type = router.currentRoute.value.query.type;
//make a for loop of 4

</script>

<style>
.readMore {
  height: fit-content;
  overflow: hidden;
}
</style>
