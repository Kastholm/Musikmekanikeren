<script setup>
definePageMeta({
  layout: "vue-admin",
});
  const user = useSupabaseUser()
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <FormAccount v-if="user" />
    <FormAuth v-else />
  </div>
</template>
