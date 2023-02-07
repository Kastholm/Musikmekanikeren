<script setup>
definePageMeta({
  hidden: true,
  layout: 'vue-admin'
})

fetch('https://kiwswbakieolzufmufjq.supabase.co/auth/v1/otp')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
</script>

<template>
  <section id="page-signin">
    <div class="flex items-center justify-center">
      <FormSignin />
    </div>
  </section>
</template>

<style>
#page-signin {
  @apply h-screen flex flex-col items-center justify-center bg-cover;
 
}
</style>
