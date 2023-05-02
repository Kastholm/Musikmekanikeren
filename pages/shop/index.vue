<template>
  <section class="bg-smooth text-Metric">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog
          as="div"
          class="relative z-40 lg:hidden"
          @close="mobileFiltersOpen = false"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
              >
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                    @click="mobileFiltersOpen = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4">
                  <Disclosure
                    as="div"
                    v-for="section in filters"
                    :key="section.name"
                    class="border-t border-gray-200 pb-4 pt-4"
                    v-slot="{ open }"
                  >
                    <fieldset>
                      <legend class="w-full px-2">
                        <DisclosureButton
                          class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span class="text-sm font-medium text-gray-900">{{
                            section.name
                          }}</span>
                          <span class="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              :class="[
                                open ? '-rotate-180' : 'rotate-0',
                                'h-5 w-5 transform',
                              ]"
                              aria-hidden="true"
                            />
                          </span>
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel class="px-4 pb-2 pt-4">
                        <div class="space-y-6">
                          <div
                            v-for="(option, optionIdx) in section.options"
                            :key="option.value"
                            class="flex items-center"
                          >
                            <input
                              :id="`${section.id}-${optionIdx}-mobile`"
                              :name="`${section.id}[]`"
                              :value="option.value"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              :for="`${section.id}-${optionIdx}-mobile`"
                              class="ml-3 text-sm text-gray-500"
                              >{{ option.label }}</label
                            >
                          </div>
                        </div>
                      </DisclosurePanel>
                    </fieldset>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div class="border-b border-gray-200 pb-10">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <p class="mt-4 text-base text-gray-500">
            Checkout out the latest release of Basic Tees, new and improved with
            four openings!
          </p>
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside class="bg-grey-100/50 p-2 rounded-md">
            <h2 class="sr-only">Filters</h2>

            <button
              type="button"
              class="inline-flex items-center lg:hidden"
              @click="mobileFiltersOpen = true"
            >
              <span class="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon
                class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </button>

            <div class="hidden lg:block">
              <form class="space-y-10 divide-y divide-gray-200">
                <div
                  v-for="(section, sectionIdx) in filters"
                  :key="section.name"
                  :class="sectionIdx === 0 ? null : 'pt-10'"
                >
                  <fieldset>
                    <legend class="block text-sm font-medium text-gray-900">
                      {{ section.name }}
                    </legend>
                    <div class="space-y-3 pt-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="`${section.id}-${optionIdx}`"
                          class="ml-3 text-sm text-gray-600"
                          >{{ option.label }}</label
                        >
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <!-- Product grid -->
          <div class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <div class="container px-6 py-10 mx-auto">
              <div
                class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"
              >
                <!-- Looper igennem alle kategorier og binder sig til category.id så den kan 
         forveksle mellem dem -->
                <div
                  v-for="category in data"
                  v-bind:key="category._id"
                  class="w-full"
                >
                  <!-- Hvis category.title findes, lav nyt NuxtLink  -->
                  <NuxtLink
                    v-if="category.title"
                    :to="`/shop/${category.title}`"
                  >
                    <div
                      :style="{
                        backgroundImage:
                          'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(' +
                          category.myImage.link +
                          ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }"
                      class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 grid place-content-center"
                    >
                      <button>Hej</button>
                    </div>
                    <h1 class="w-56 h-2 mt-4">{{ category.title }}</h1>
                    <p class="w-24 h-2 mt-4">Undertitel</p>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped></style>

<script setup>
const query = `*[_type == "category"]`;
const { data } = useSanityQuery(query);
console.log(data);

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/vue/20/solid";

const filters = [
  
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "Blæs" },
      { value: "tees", label: "Guitar" },
      { value: "crewnecks", label: "Bass" },
      { value: "sweatshirts", label: "kabler" },
      { value: "pants-shorts", label: "Forstærkere" },
    ],
  },
  {
    id: "Mærker",
    name: "Mærker",
    options: [
      { value: "Mærke1", label: "Mærke1" },
      { value: "Mærke2", label: "Mærke2" },
      { value: "Mærke3", label: "Mærke3" },
      { value: "Mærke4", label: "Mærke4" },
      { value: "Mærke5", label: "Mærke5" },
      { value: "Mærke6", label: "Mærke6" },
    ],
  },
];

const mobileFiltersOpen = ref(false);
</script>
