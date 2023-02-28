<script setup>

import { gsap } from 'gsap';
import { Grid } from 'swiper';
import { onMounted} from "vue";


onMounted(async () => { 
const items = document.querySelectorAll('.item')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: .5,
    ease: 'expo'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 1,
    ease: 'expo'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})

});





</script>
<template>
  <section class="relative z-10">
       <div class="group">
       <div class="item itemFirst w-[42vw]" style="background-image: url(https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"></div>
       <div class="item" style="background-image: url(https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"></div>
       <br class="block md:hidden">
       <div class="item" style="background-image: url(https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"></div>
       <div class="item" style="background-image: url(https://images.pexels.com/photos/462439/pexels-photo-462439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"></div>
     </div>
  </section>
</template>

<style>
.group {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

.item {
  width: 15vw;
  /* height: 75vh; */
  height: 40vh;
  background-position: center;
  background-size: 75vh;
  
  margin: 1vw;
  border-radius: 3vw;
  display: inline-block;
  cursor: pointer;
}
  .itemFirst {
    width: 42vw ;
  }

</style>