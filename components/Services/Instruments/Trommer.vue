<template>
  <div class="container mx-auto p-8 pt-0 md:pt-8">
    <div class="flex flex-row flex-wrap -mx-2">
      <div
        v-for="trommer in data"
        :key="trommer._id"
        class="w-full md:w-1/2 lg:w-1/2 mb-12 px-2"
      >
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img class="block" :src="trommer.imgurl" :alt="trommer.title" />
          </picture>
          <div class="p-4 relative">
            <h3
              class="text-lg font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
            >
              <a
                class="stretched-link text-[2rem] text-gray-800"
                href="#"
                title="Card 1"
              >
                {{ trommer.title }}
              </a>
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
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "trommer"]`;
const { data } = useSanityQuery(query);

//make a for loop of 4
</script>

<style>
.readMore {
  height: 4.5em;
  overflow: hidden;
}
.expanded {
  height: 100%;
}
.readMore::after {
  content: "Læs mere \A \2193";
  white-space: pre;
  position: absolute;
  display: grid;
  place-content: center;
  bottom: -40px;
  right: 45%;
  width: fit-content;
  text-align: center;
  padding: 0.5em;
  height: 3em;
  color: white;
  border-radius: 10px;
  background: rgb(54, 48, 48);
}
</style>
