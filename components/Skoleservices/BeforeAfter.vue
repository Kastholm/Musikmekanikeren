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

onMounted(async () => {
  const viewers = document.querySelectorAll(".image-compare");
  console.log(viewers);
  viewers.forEach((element) => {
    let view = new ImageCompare(element).mount();
  });
  console.log(viewers);
});
const benefits = [
  "Optimering af musiklokalet.",
  "Fuldt servicetjek på alle typer musikinstrumenter.",
  "Service på stedet - lån udstyr, mens dit eget bliver repareret.",
  "Kyndig vejledning ved investering af nyt udstyr.",
  "Løsningsorienteret sparring. ",
  "A great work environment",
];
</script>

<template>
  <section class="z-10 relative">
    <!-- CTA section -->
    <div class="relative isolate -z-10 mt-12 mb-12">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
        >
          <img
            class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="https://i.ibb.co/qCB1cCk/pexels-jonas-mohamadi-2495569-1-1.jpg"
            alt=""
          />
          <div class="w-full flex-auto">
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Vi tilbyder:
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              At få foretaget denne gennemgang af musiklokalet koster ingenting,
              og du binder dig ikke til noget. Det er blot medvirkende til at
              skabe et overblik over netop dit musiklokale og mulighederne deri.

              <br /><br />
              Hvis du tænker at dette kunne være interessant for netop din
              skole, så ring eller skriv for at booke en tid til et
              uforpligtende besøg!
            </p>
            <ul
              role="list"
              class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
            >
              <li
                v-for="benefit in benefits"
                :key="benefit"
                class="flex gap-x-3"
              >
                <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
                {{ benefit }}
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
    <SkoleservicesTestimonials />
    <div class="bg-cyangreen mt-4 py-8 grid">
      <h2 class="text-5xl m-auto py-8">Se vores tidligere løsninger</h2>
      <div
        class="max-h-[40em] overflow-hidden m-auto grid grid-cols-1 lg:grid-cols-2 py-12 px-[8vw]"
      >
        <div class="order-2 px-4">
          <h2 class="text-4xl mb-2">Overskrift</h2>
          <p class="leading-8">
            Brødtekst Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo earum nam, vitae maiores harum est expedita voluptates.
            Consequuntur, alias voluptates iusto optio sit similique quibusdam
            delectus adipisci quas reiciendis tenetur praesentium! Maxime quasi
            iste ad itaque ducimus. Sit maxime voluptates accusantium quas
            beatae placeat, aspernatur aperiam voluptatibus suscipit,
            consequuntur vero.
          </p>
        </div>
        <div class="image-compare order-1">
          <img
            src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20F%C3%98R.jpg?etag=%22f7e03-61d8bfc9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1384%2B1038&extract=0%2B0%2B1384%2B1016&quality=85"
            alt=""
          />
          <img
            src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20EFTER.jpg?etag=%22fe73f-61d8bfca%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1448%2B1086&extract=0%2B16%2B1440%2B1012&quality=85"
            alt=""
          />
        </div>
      </div>
      <div
        class="max-h-[40em] overflow-hidden m-auto grid grid-cols-2 text-Metric bg-smooth py-12 px-[8vw]"
      >
        <div class="order-1 px-4">
          <h2 class="text-4xl mb-2">Overskrift</h2>
          <p class="leading-8">
            Brødtekst Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo earum nam, vitae maiores harum est expedita voluptates.
            Consequuntur, alias voluptates iusto optio sit similique quibusdam
            delectus adipisci quas reiciendis tenetur praesentium! Maxime quasi
            iste ad itaque ducimus. Sit maxime voluptates accusantium quas
            beatae placeat, aspernatur aperiam voluptatibus suscipit,
            consequuntur vero.
          </p>
        </div>
        <div class="image-compare order-2">
          <img
            src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20F%C3%98R.jpg?etag=%22f7e03-61d8bfc9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1384%2B1038&extract=0%2B0%2B1384%2B1016&quality=85"
            alt=""
          />
          <img
            src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20EFTER.jpg?etag=%22fe73f-61d8bfca%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1448%2B1086&extract=0%2B16%2B1440%2B1012&quality=85"
            alt=""
          />
        </div>
      </div>
      <div
        class="max-h-[40em] overflow-hidden m-auto grid grid-cols-1 lg:grid-cols-2 py-12 px-[8vw]"
      >
        <div class="order-2 px-4">
          <h2 class="text-4xl mb-2">Overskrift</h2>
          <p class="leading-8">
            Brødtekst Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo earum nam, vitae maiores harum est expedita voluptates.
            Consequuntur, alias voluptates iusto optio sit similique quibusdam
            delectus adipisci quas reiciendis tenetur praesentium! Maxime quasi
            iste ad itaque ducimus. Sit maxime voluptates accusantium quas
            beatae placeat, aspernatur aperiam voluptatibus suscipit,
            consequuntur vero.
          </p>
        </div>
        <div class="image-compare order-1">
          <img
            src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20F%C3%98R.jpg?etag=%22f7e03-61d8bfc9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1384%2B1038&extract=0%2B0%2B1384%2B1016&quality=85"
            alt=""
          />
          <img
            src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20EFTER.jpg?etag=%22fe73f-61d8bfca%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1448%2B1086&extract=0%2B16%2B1440%2B1012&quality=85"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
