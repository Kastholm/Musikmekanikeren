<template>
  <section class="bg-black-800 dark:bg-gray-900 pt-[10em]">
    <!-- Looper igennem alle kategorier og binder sig til category.id så den kan 
forveksle mellem dem -->
    <div
      v-for="category in data"
      v-bind:key="category._id"
      class="container px-6 py-10 mx-auto"
    >
      <!-- Hvis title fra Sanity er det helt samme som vue dynamic link [subcategory] (sortere kategorier fra hinanden) -->
      <div
        v-if="subcategory == category.title"
        class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"
      >
        <!-- indeller category.categories i indexes. så de bliver adskilt. og kalder for subCategory for bedre semantik -->
        <div
          v-for="(subCategory, index) in category.categories"
          :key="index"
          class="w-full"
        >
          <!-- Hvis kategorien har underkategorier, ellers vises intet -->
          <NuxtLink v-if="category.categories">
            <div
              :style="{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(' +
                  subCategory.name +
                  ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
              class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 grid place-content-center"
            >
              <button>Hej</button>
            </div>
            <h1 class="w-56 h-2 mt-4">{{ subCategory.name }}</h1>
            <p class="w-24 h-2 mt-4">undertitel</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { subcategory } = useRoute().params;

const query = `*[_type == "category"]`;
const { data } = useSanityQuery(query);
console.log(data);
</script>
