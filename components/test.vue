<template>
  <h1>hej</h1>
</template>

<script>
export default {
   async asyncData({ $axios }) {
      const response = await $axios.get('http://localhost:1337/posts');
      return {
         posts: response.data
      };
   }
}
</script>

<style>

</style>