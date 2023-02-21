<template>
<section class="bg-white dark:bg-gray-900">
     <!-- animate-pulse -->
    <div  class="container px-6 py-10 mx-auto ">
        <div  class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div v-for="category in data" v-bind:key="category._id" class="w-full">
                <div style="background-image: url(${JSON.stringify(category.myImage.link)}); background-size: cover;" class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 grid place-content-center"><button>Hej</button></div>
                <h1 class="w-56 h-2 mt-4 ">{{ category.title }}</h1>
                <p class="w-24 h-2 mt-4 ">Undertitel</p>
             <!-- <img :src="category.myImage.link" alt=""> -->
             <h2>{{category.myImage.link}}</h2>
            </div>
        </div>
    </div>
</section>
 <!-- <section >
  
  
  <div class="pt-32 flex columns-3"  >
   <span v-for="category in data" v-bind:key="category._id">
    <img class="h-32 w-32" :src="category.myImage.asset._ref" alt="">
    <h2>{{ category.title }}</h2>
       
    </span>
        
  </div>
 </section> -->






  
</template>

<script setup>

const query = `*[_type == "category"] {
   _id,
  title,
  category.myImage {
    link
  }
}`
const { data } = useSanityQuery(query);

/* function getImageUrl(imageId) {
  return `https://cdn.sanity.io/images/1f5ltia2/production/${imageId}.jpg`
}
 */
console.log(data)

</script>
