<template>
  <NuxtPage />

</template>

<script>
// Page title / Meta Description start
import { ref } from 'vue'

const pageTitle = ref('Musik Mekanikeren - Reparerer alle typer af instrumenter & forstærkere')
const pageDescription = ref('Dit instruments bedste ven - Musik Mekanikeren har i løbet af de sidste 8 år været fast service-partner for diverse skoler og private. Find os online eller i butikken.')

const head = () => ({
  title: pageTitle.value,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pageDescription.value
    }
  ]
})
// Page title / Meta Description slut
</script>

<style>

</style>