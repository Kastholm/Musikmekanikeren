<template>
<section class="bg-white dark:bg-gray-900">
     <!-- animate-pulse -->
    <div  class="container px-6 py-10 mx-auto ">
        <div  class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div v-for="category in data" v-bind:key="category._id" class="w-full">
              
                <NuxtLink v-if="category.title" :to="`/shop/${category.title}`">
                  <div :style="{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('+ category.myImage.link +')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }"  class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 grid place-content-center"><button>Hej</button></div>
                  <h1 class="w-56 h-2 mt-4 ">{{ category.title }}</h1>
                  <p class="w-24 h-2 mt-4 ">Undertitel</p>
                </NuxtLink>
                
            </div>
        </div>
    </div>
</section>
  
</template>

<script setup>

const query = `*[_type == "category"]`
const { data } = useSanityQuery(query);
console.log(data)

</script>

