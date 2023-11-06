<template>
  <div class="container mx-auto p-8 pt-0 md:pt-8">
    <div v-if="!data" class="flex justify-center items-center">
      <div class="loader"></div>
    </div>
    <div v-else class="flex flex-row flex-wrap -mx-2">
      <div
        v-for="strenge in data"
        :key="strenge._id"
        class="w-full md:w-1/2 xl:w-1/3 mb-12 px-2 hover:scale-[1.005] hover:shadow-black cursor-pointer transition-transform"
      >
        <NuxtLink
          class="stretched-link text-gray-800"
          :to="'/Service/' + strenge.title + '?type=strenge'"
          title="Card 1"
        >
          <div class="relative bg-white rounded border">
            <picture
              class="block bg-gray-200 border-b max-h-[14em] overflow-hidden"
            >
              <img class="block" :src="strenge.imgurl" :alt="strenge.title" />
            </picture>
            <div class="p-4 relative">
              <h3
                class="text-2xl font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
              >
                {{ strenge.title }}
              </h3>
              <p
                class="text-gray-800 readMore"
                :class="{ expanded: strenge.expanded }"
                @click="strenge.expanded = !strenge.expanded"
              >
                {{ strenge.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "strenge"]`;
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
