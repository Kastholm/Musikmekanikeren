<script setup>
import { defineComponent, h, ref, onMounted } from "vue";
import ImageCompare from "image-compare-viewer";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import "image-compare-viewer/dist/image-compare-viewer.min.css";

import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/vue/20/solid";
import { SanityBlocks } from "sanity-blocks-vue-component";
const query = groq`*[_type == "beforeAfter"]`;
const { data } = useSanityQuery(query);
onMounted(async () => {
  const viewers = document.querySelectorAll(".image-compare");
  //console.log(viewers);
  viewers.forEach((element) => {
    let view = new ImageCompare(element).mount();
  });
  console.log(viewers);
});

</script>

<template>
  <section class="z-10 relative">
   

    <SkoleservicesCTA />
    <SkoleservicesTestimonials />
    <div class="bg-cyangreen mt-4 py-8 grid">
      <h2 class="text-5xl m-auto py-8">Se vores tidligere løsninger</h2>

      <div
        v-for="(beforeAfter, index) in data"
        :key="beforeAfter"
        class="baSection max-h-[40em] overflow-hidden m-auto grid grid-cols-1 lg:grid-cols-2 py-12 px-[8vw]"
        :class="index % 2 === 0 ? '' : 'bg-white'"
      >
        <div
          class="px-4 titleText"
          :class="index % 2 === 0 ? 'order-2' : 'order-1'"
        >
          <h2 class="text-4xl mb-2">{{ beforeAfter.title }}</h2>
          <div
            class="leading-8"
            :class="index % 2 === 0 ? 'text-white' : 'text-black'"
          >
            <SanityBlocks
              :blocks="beforeAfter.content"
              :serializers="serializers"
            />
          </div>
        </div>
        <div
          class="image-compare beforeAfter"
          :class="index % 2 === 0 ? 'order-1' : 'order-2'"
        >
          <img :src="beforeAfter.imgurlbefore" alt="" />
          <img :src="beforeAfter.imgurlafter" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
