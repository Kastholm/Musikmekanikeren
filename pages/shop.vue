<template>
 <section >
  <ul class="pt-[32em]" >
   <li v-for="category in data" v-bind:key="category._id">
    <span v-if='category.subcategories = 1'>{{ category.title }}</span>
          
        </li>
      </ul>
 </section>
</template>

<script setup>
const query = `*[_type == "category"]`
const { data } = useSanityQuery(query);


/* console.log(query.products.categories) */
console.log(data)
</script>