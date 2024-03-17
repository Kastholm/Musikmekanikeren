<template>
  <section id="abc" class="text-Metric pt-32">
    <div v-for="item in data" :key="item._id">
      <p class="p-8 pt-0 md:pt-8" v-if="item.sections.length > 1"></p>
      <div v-if="item.sections.length > 1" class="container mx-auto">
        <div class="grid place-content-center text-smooth">
          <h1 class="shopHeader text-5xl">{{ item.title }} Kategorier</h1>
          <p class="arrow bg-Metric"></p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-2">
          <div
            v-for="section in item.sections"
            :key="section._key"
            class="w-full mb-12 px-2 hover:scale-[1.005] hover:shadow-black cursor-pointer transition-transform"
          >
            <a :href="`#${section.shoptitle.replace(/\s+/g, '-')}`">
              <div class="relative bg-white rounded border">
                <picture
                  class="block bg-gray-200 border-b max-h-[300px] min-h-[300px] overflow-hidden"
                >
                  <img
                    class="block w-full h-full"
                    :src="section.imgurl"
                    :alt="section.title"
                  />
                </picture>
                <div class="p-4 relative">
                  <h3
                    class="text-2xl font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
                  >
                    {{ section.shoptitle }}
                  </h3>
                  <BaseButton>Se udvalget</BaseButton>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-8 pt-0 md:pt-8">
      <div v-for="item in data" :key="item._id">
        <div v-for="section in item.sections" :key="section._key">
          <div class="grid place-content-center text-smooth">
            <h1
              :id="section.shoptitle.replace(/\s+/g, '-')"
              class="shopHeader text-5xl pt-2"
            >
              {{ section.shoptitle }}
            </h1>
            <p class="arrow bg-smooth"></p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 -mx-2">
            <div
              v-for="product in section.productCategory"
              :key="product._key"
              class="w-full mb-12 px-2 hover:shadow-black transition-transform"
            >
              <div class="relative bg-white rounded border">
                <picture
                  class="block bg-gray-200 border-b max-h-[300px] min-h-[300px] overflow-hidden"
                >
                  <img
                    class="block w-full h-full"
                    :src="product.imgurl"
                    :alt="product.ptitle"
                  />
                </picture>
                <div class="p-4 relative">
                  <h3
                    class="text-2xl font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
                  >
                    {{ product.ptitle }}
                  </h3>
                  <!-- <p>{{ product.description }}</p> -->
                  <SanityBlocks
                    :blocks="product.description"
                    :serializers="serializers"
                  />
                  <p class="mt-8 text-2xl font-bold">
                    DKK {{ product.price }},-
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  <!-- Link ned til id af den man ønsker at se. fremvise all produkter her -->

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { SanityBlocks } from "sanity-blocks-vue-component";

const route = useRoute();

const slug = route.params.subcategory;
console.log(slug, "slug");
const query = `*[(_type == "shop") && (slug.current == "${slug}")]`;
const { data } = useSanityQuery(query);
console.log(data, "data");

const mobileFiltersOpen = ref(false);
</script>

<style scoped>
.shopHeader {
  position: relative;
}
.arrow {
  text-align: center;
  height: 1em;
  width: 1em;
  margin: 1em auto 3em auto;
  -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}
</style>
