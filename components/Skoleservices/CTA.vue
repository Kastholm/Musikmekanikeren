<template>
  <!-- CTA section -->
  <div
    v-for="keypoint in data"
    :key="keypoint"
    class="relative isolate -z-10 mt-12 mb-12"
  >
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
      >
        <img
          class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
          :src="keypoint.imgurl"
          alt=""
        />
        <div class="w-full flex-auto">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ keypoint.title }}
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            <SanityBlocks
              :blocks="keypoint.content"
              :serializers="serializers"
            />
          </p>
          <ul
            role="list"
            class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
          >
            <li class="flex gap-x-3">
              <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
              {{ keypoint.title1 }}
            </li>
            <li class="flex gap-x-3">
              <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
              {{ keypoint.title2 }}
            </li>
            <li class="flex gap-x-3">
              <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
              {{ keypoint.title3 }}
            </li>
            <li class="flex gap-x-3">
              <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
              {{ keypoint.title4 }}
            </li>
            <li class="flex gap-x-3">
              <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
              {{ keypoint.title5 }}
            </li>
            <li class="flex gap-x-3">
              <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
              {{ keypoint.title6 }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      />
    </div>
  </div>
</template>

<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
const query = groq`*[_type == "keypoint"]`;
const { data } = useSanityQuery(query);
console.log(data);
import {
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
} from "@heroicons/vue/24/outline";
const benefits = [
  "Optimering af musiklokalet.",
  "Fuldt servicetjek på alle typer musikinstrumenter.",
  "Service på stedet - lån udstyr, mens dit eget bliver repareret.",
  "Kyndig vejledning ved investering af nyt udstyr.",
  "Løsningsorienteret sparring. ",
  "A great work environment",
];
</script>

<style>
</style>