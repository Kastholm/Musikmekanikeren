<template>
  <div>
    <h1>{{ shopData.title }}</h1>
    <!-- Vis underkategori data her -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const shopData = ref({})

// Antag, at vi har en funktion der henter shop data baseret på slug
async function fetchShopData(slug) {
  // Implementer logikken til at hente data baseret på slug her
  // Dette kunne være en forespørgsel til Sanity
}

// Brug watchEffect eller onMounted fra Vue til at hente data, når komponenten er klar
onMounted(async () => {
  const slug = route.params.slug // Få slug fra ruten
  shopData.value = await fetchShopData(slug)
})
</script>

<style scoped>
</style>
