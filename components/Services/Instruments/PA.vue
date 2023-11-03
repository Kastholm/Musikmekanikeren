<template>
  <div class="container mx-auto p-8 pt-0 md:pt-8">
    <div class="flex flex-row flex-wrap -mx-2">
      <div
        v-for="PA in data"
        :key="PA._id"
        class="w-full md:w-1/2 lg:w-1/3 mb-12 px-2 hover:scale-[1.005] hover:shadow-black"
      >
        <NuxtLink
          class="stretched-link text-[2rem] text-gray-800"
          :to="'/Service/' + PA.title + '?type=PA'"
          title="Card 1"
        >
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <img class="block" :src="PA.imgurl" :alt="PA.title" />
            </picture>
            <div class="p-4 relative">
              <h3
                class="text-2xl  font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
              >
                {{ PA.title }}
              </h3>
              <!-- <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01"
              >1st January 2019</time
            > -->
              <p
                class="text-gray-800 readMore"
                :class="{ expanded: PA.expanded }"
                @click="PA.expanded = !PA.expanded"
              >
                {{ PA.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "PA"]`;
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
