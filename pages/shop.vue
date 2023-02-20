<template>
 <section >
  <!-- v-if="data" -->
  <div class="pt-32 flex columns-3"  >
   <span v-for="category in data" v-bind:key="category._id">
    <img class="h-32 w-32" :src="category.myImage.asset._ref" alt="">
    <h2>{{ category.title }}</h2>
       <!--  <h3> Subcat: {{ category.categories}}</h3> -->
    </span>
        
  </div>
 </section>
</template>

<script setup>
const query = `*[_type == "category"]`
const { data } = useSanityQuery(query);

/*  v-if='category.subcategories = 1' */

/* console.log(query.products.categories) */
console.log(data)
</script>
