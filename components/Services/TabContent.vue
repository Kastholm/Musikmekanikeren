<script setup>
import { gsap } from "gsap";
import { Grid } from "swiper";
import { onMounted, ref, watch } from "vue";

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
  <section
    class="relative z-10 bg-smooth py-4 md:py-8 m-auto px-4 sm:px-6 lg:px-8"
  >
    <h2 class="text-Metric text-center mb-4 text-5xl">
      Hvilket instrument ønsker du repareret?
    </h2>
    <!-- <div class="group hidden md:block">
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
        </div>
      </div>
    </div> -->

    <div>
      <div class="">
        <nav class=" flex">
          <div
            @click="selectedInstrument = 'Strenge'"
            :class="
              selectedInstrument === 'Strenge'
                ? 'bg-cyangreen text-xl border-transparent'
                : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  transform transition border-b-2'
            "
            class="hover:cursor-pointer rounded-t-lg mr-1 text-center w-1/4 py-6 px-1"
          >
            <h2 class="text-xl">Strengeinstrumenter</h2>
          </div>
          <div
            @click="selectedInstrument = 'Trommer'"
            :class="
              selectedInstrument === 'Trommer'
                ? 'bg-cyangreen text-xl border-transparent'
                : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  transform transition border-b-2'
            "
            class="hover:cursor-pointer rounded-t-lg mr-1 text-center w-1/4 py-6 px-1"
          >
            <h2 class="text-xl">Trommer & Slagtøj</h2>
          </div>
          <div
            @click="selectedInstrument = 'Klaver'"
            :class="
              selectedInstrument === 'Klaver'
                ? 'bg-cyangreen text-xl border-transparent'
                : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  hover:bg-cayangreen transform transition border-b-2'
            "
            class="hover:cursor-pointer rounded-t-lg text-center w-1/4 py-6 px-1"
          >
            <h2 class="text-xl">Klaverer & Keyboards</h2>
          </div>
          <div
            @click="selectedInstrument = 'PA'"
            :class="
              selectedInstrument === 'PA'
                ? 'bg-cyangreen text-2xl border-transparent'
                : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  transform transition border-b-2'
            "
            class="hover:cursor-pointer rounded-t-lg ml-1 text-center w-1/4 py-6 px-1"
          >
            <h2 class="text-xl">Forstærkere & PA</h2>
          </div>
        </nav>
      </div>

      <div class="bg-cyangreen rounded-b-lg" ref="contentWrapper">
        <ServicesInstrumentsStrenge v-if="selectedInstrument === 'Strenge'" />
        <ServicesInstrumentsTrommer v-if="selectedInstrument === 'Trommer'" />
        <ServicesInstrumentsKlaver v-if="selectedInstrument === 'Klaver'" />
        <ServicesInstrumentsPA v-if="selectedInstrument === 'PA'" />
      </div>

      <!-- Tab Content går her -->
    </div>

    <div class="inline md:hidden grid grid-cols-1 gap-2 place-content-center">
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'Strenge'"
        ><p>Strenge</p></span
      >
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'Trommer'"
        ><p>Trommer</p></span
      >
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'Klaver'"
        ><p>Klaver</p></span
      >
      <span
        class="bg-indigo-600 w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'PA'"
        ><p>Elek</p></span
      >
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
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: height 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.6 */ {
  height: 0;
  overflow: hidden;
}
</style>
