<template>
 <section >
  <ul class="pt-[32em] flex" >
   <li v-for="category in data" v-bind:key="category._id">
    <span class="bg-green-800 text-smooth p-12">{{ category.title }}</span>
        <span> Subcat: {{ category.categories}}</span>
        </li>
        
      </ul>
 </section>
</template>

<script setup>
const query = `*[_type == "category"]`
const { data } = useSanityQuery(query);

/*  v-if='category.subcategories = 1' */

/* console.log(query.products.categories) */
console.log(data)
</script>
