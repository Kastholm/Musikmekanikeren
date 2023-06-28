<script setup>
import { gsap } from "gsap";
import { Grid } from "swiper";
import { onMounted, ref } from "vue";
let selectedInstrument = ref("Strenge");
onMounted(async () => {
  const items = document.querySelectorAll(".item");
  const expand = (item, i) => {
    items.forEach((it, ind) => {
      if (i === ind) return;
      it.clicked = false;
    });
    gsap.to(items, {
      width: item.clicked ? "12em" : "10em",
      duration: 0.3,
      ease: "expo",
    });
    item.clicked = !item.clicked;
    gsap.to(item, {
      width: item.clicked ? "25em" : "15em",
      duration: 0.6,
      ease: "expo",
    });
  };
  items.forEach((item, i) => {
    item.clicked = false;
    item.addEventListener("click", () => expand(item, i));
  });
});
</script>

<template>
<<<<<<< HEAD
  <div class="container mx-auto p-8">
    <div class="flex flex-row flex-wrap -mx-2">
      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img
              class="block h-96 w-full"
              src="https://i.ibb.co/tJgkyB1/pexels-barthy-bonhomme-185029.jpg"
              alt="Card 1"
            />
          </picture>
          <div class="p-4">
            <h3 class="text-lg font-bold">
              <a class="stretched-link text-gray-900" href="#" title="Card 1">
                Service1
              </a>
            </h3>
            
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img
              class="block h-96 w-full"
              src="https://i.ibb.co/tJgkyB1/pexels-barthy-bonhomme-185029.jpg"
              alt="Projekt 2"
            />
          </picture>
          <div class="p-4">
            <h3 class="text-lg font-bold">
              <a class="stretched-link text-gray-900" href="#" title="Card 2">
                Service2
              </a>
            </h3>
            
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img
              class="block h-96 w-full"
              src="https://i.ibb.co/tJgkyB1/pexels-barthy-bonhomme-185029.jpg"
              alt="Projekt 3"
            />
          </picture>
          <div class="p-4">
            <h3 class="text-lg font-bold">
              <a class="stretched-link text-gray-900" href="#" title="Card 3">
                Service3
              </a>
            </h3>
           
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img
              class="block h-96 w-full"
              src="https://i.ibb.co/9c7FYT2/pexels-m-line-waxx-165971.jpg"
              alt="Card 4"
            />
          </picture>
          <div class="p-4">
            <h3 class="text-lg font-bold">
              <a class="stretched-link text-gray-900" href="#" title="Card 4">
                Service4
              </a>
            </h3>
            
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img
              class="block h-96 w-full"
              src="https://i.ibb.co/9c7FYT2/pexels-m-line-waxx-165971.jpg"
              alt="Card 5"
            />
          </picture>
          <div class="p-4">
            <h3 class="text-lg font-bold">
              <a class="stretched-link text-gray-900" href="#" title="Card 5">
                Service5
              </a>
            </h3>
            
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img
              class="block h-96 w-full"
              src="https://i.ibb.co/9c7FYT2/pexels-m-line-waxx-165971.jpg"
              alt="Card 6"
            />
          </picture>
          <div class="p-4">
            <h3 class="text-lg font-bold">
              <a class="stretched-link text-gray-900" href="#" title="Card 6">
                Service6
              </a>
            </h3>
            
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
=======
  <section class="relative z-10 py-4 md:py-8 m-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-smooth mb-4 text-5xl">
      Hvilket instrument ønsker du repareret?
    </h2>
    <div class="group hidden md:block">
      <div
        class="item itemFirst w-[25em] relative"
        style="
          background-image: url(https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
        @click="selectedInstrument = 'Strenge'"
      >
        <div class="itemContext">
          <span><h2>Strenge</h2></span>
          <span></span>
        </div>
      </div>
      <div
        class="item"
        style="
          background-image: url(https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
        @click="selectedInstrument = 'Trommer'"
      >
        <div class="itemContext">
          <span><h2>Trommer</h2></span>
          <span></span>
        </div>
      </div>
      <br class="block md:hidden" />
      <div
        class="item"
        style="
          background-image: url(https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
        @click="selectedInstrument = 'Klaver'"
      >
        <div class="itemContext">
          <span><h2>Klaver</h2></span>
          <span></span>
        </div>
      </div>
      <div
        class="item"
        style="
          background-image: url(https://images.pexels.com/photos/462439/pexels-photo-462439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
        @click="selectedInstrument = 'PA'"
      >
        <div class="itemContext">
          <span><h2>PA</h2></span>
          <span></span>
>>>>>>> 1d3997245c2aea39a236209b12cb71d4382bebe5
        </div>
      </div>
    </div>
    <div class="inline md:hidden grid grid-cols-1 gap-2 place-content-center">
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center"
        ><p>Strenge</p></span
      >
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center"
        ><p>Trommer</p></span
      >
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center"
        ><p>Klaver</p></span
      >
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center"
        ><p>Elek</p></span
      >
    </div>
  </section>
  <ServicesInstrumentsStrenge v-if="selectedInstrument === 'Strenge'" />
  <ServicesInstrumentsTrommer v-if="selectedInstrument === 'Trommer'" />
  <ServicesInstrumentsKlaver v-if="selectedInstrument === 'Klaver'" />
  <ServicesInstrumentsPA v-if="selectedInstrument === 'PA'" />
</template>
<style>
.group {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}
.item {
  width: 10em;
  /* height: 75vh; */
  height: 40vh;
  background-position: center;
  background-size: 75vh;
  overflow: hidden;
  margin: 1vw;
  position: relative;
  border-radius: 3vw;
  display: inline-block;
  cursor: pointer;
}
.itemFirst {
  width: 25em;
}
.itemContext {
  @apply flex justify-end align-bottom;
  height: 100%;
}
.itemContext span {
  @apply relative w-1/2;
}
.itemContext h2 {
  @apply text-5xl absolute bottom-6 left-6 text-left;
}
.itemContext h2 p {
  @apply mt-2;
}
.itemContext button {
  @apply w-fit absolute bottom-6 right-6;
}
</style>
