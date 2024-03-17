<template>
  <section id="abc" v-if="data" class="text-Metric pt-32">
    <div class="container mx-auto p-8 pt-0 md:pt-8">
      <div class="text-center text-smooth">
        <p>Velkomen til</p>
        <h1 class="text-5xl">MUSIK MEKANIKERENS SHOP</h1>
        <p class="mt-8 mb-16">
          Her finder du kategorier for reservedele & hardware, skruer & knapper,
          komponenter og diverse andre dimser. Leder du efter en specifik
          reservedel er du også velkommen til at kontakte værkstedet for at få
          det bestilt hjem til dig. Værkstedet fører også et udvalg af strenge,
          trommeskind og plejemidler til dine instrumenter som du kan klikke dig
          frem til nedenfor.<br />
          <br />
          Bestilling foregår ved at sende enten en mail eller sms og du vil
          herefter modtage et betalingslink via mobilepay. Herefter sendes dine
          varer til dig eller du kan vælge at afhente dem her på adressen.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mx-2">
        <div
          v-for="item in data"
          :key="item._id"
          class="w-full mb-12 px-2 hover:scale-[1.005] hover:shadow-black cursor-pointer transition-transform"
        >
          <a :href="`/shop/${item.slug.current}`">
            <div class="relative bg-white rounded border">
              <picture
                class="block bg-gray-200 border-b max-h-[300px] min-h-[300px] overflow-hidden"
              >
                <img
                  class="block w-full"
                  :src="item.imgurl"
                  :alt="item.title"
                />
              </picture>
              <div class="p-4 relative">
                <h3
                  class="text-2xl font-bold absolute -top-10 left-0 p-2 bg-white rounded-tr-lg"
                >
                  {{ item.title }}
                </h3>

                <BaseButton>Se udvalget</BaseButton>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
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
