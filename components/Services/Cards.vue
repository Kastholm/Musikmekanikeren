<script setup>
import { gsap } from "gsap";
import { Grid } from "swiper";
import { onMounted } from "vue";
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
      >
        <div class="itemContext">
          <span
            ><h2>
              Strenge
              <p>- Guitar</p>
              <p>- Elektronik</p>
              <p>- Meget mere</p>
            </h2></span
          >
          <span></span>
        </div>
      </div>
      <div
        class="item"
        style="
          background-image: url(https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
      >
        <div class="itemContext">
          <span
            ><h2>
              Strenge
              <p>- Guitar</p>
              <p>- Elektronik</p>
              <p>- Meget mere</p>
            </h2></span
          >
          <span></span>
        </div>
      </div>
      <br class="block md:hidden" />
      <div
        class="item"
        style="
          background-image: url(https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
      >
        <div class="itemContext">
          <span
            ><h2>
              Strenge
              <p>- Guitar</p>
              <p>- Elektronik</p>
              <p>- Meget mere</p>
            </h2></span
          >
          <span></span>
        </div>
      </div>
      <div
        class="item"
        style="
          background-image: url(https://images.pexels.com/photos/462439/pexels-photo-462439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
      >
        <div class="itemContext">
          <span
            ><h2>
              Strenge
              <p>- Guitar</p>
              <p>- Elektronik</p>
              <p>- Meget mere</p>
            </h2></span
          >
          <span></span>
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
