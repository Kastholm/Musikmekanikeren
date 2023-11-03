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
    <h2 class="text-Metric text-center mt-8 mb-16 text-5xl">
      Hvilket instrument ønsker du repareret?
    </h2>
    <div
      class="inline bg-cyangreen lg:hidden p-4 lg:p-0 lg:mb-4 grid grid-cols-1 gap-2 place-content-center"
    >
      <span
        class="w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'Strenge'"
        :class="
          selectedInstrument === 'Strenge'
            ? 'bg-smooth text-Metric text-xl border-transparent'
            : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  transform transition border-b-2'
        "
        ><p>Strenge</p></span
      >
      <span
        class="w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'Trommer'"
        :class="
          selectedInstrument === 'Trommer'
            ? 'bg-smooth text-Metric text-xl border-transparent'
            : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  transform transition border-b-2'
        "
        ><p>Trommer</p></span
      >
      <span
        class="w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'Klaver'"
        :class="
          selectedInstrument === 'Klaver'
            ? 'bg-smooth text-Metric text-xl border-transparent'
            : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  transform transition border-b-2'
        "
        ><p>Klaver</p></span
      >
      <span
        class="bg-Metric w-full h-12 text-center grid place-content-center cursor-pointer"
        @click="selectedInstrument = 'PA'"
        :class="
          selectedInstrument === 'PA'
            ? 'bg-smooth text-Metric text-xl border-transparent'
            : 'bg-Metric hover:bg-cyangreen hover:scale-[1.01]  transform transition border-b-2'
        "
        ><p>Elek</p></span
      >
    </div>
    <div>
      <div class="hidden lg:block">
        <nav class="flex">
          <div
            @click="selectedInstrument = 'Strenge'"
            :class="
              selectedInstrument === 'Strenge'
                ? 'bg-cyangreen  text-xl border-transparent'
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

      <div class="bg-cyangreen pt-6 lg:pt-0 rounded-b-lg" ref="contentWrapper">
        <ServicesInstrumentsStrenge v-if="selectedInstrument === 'Strenge'" />
        <ServicesInstrumentsTrommer v-if="selectedInstrument === 'Trommer'" />
        <ServicesInstrumentsKlaver v-if="selectedInstrument === 'Klaver'" />
        <ServicesInstrumentsPA v-if="selectedInstrument === 'PA'" />
      </div>

      <!-- Tab Content går her -->
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
