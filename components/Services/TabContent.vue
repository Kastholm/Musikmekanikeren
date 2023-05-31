<template>
  <div class="container mx-auto p-8 pt-0 md:pt-8">
    <div class="flex flex-row flex-wrap -mx-2">
      <div
        v-for="index in 6"
        :key="index"
        class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2"
      >
        <div class="relative bg-white rounded border">
          <picture class="block bg-gray-200 border-b">
            <img
              class="block"
              src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0"
              alt="Card 1"
            />
          </picture>
          <div class="p-4">
            <h3 class="text-lg font-bold">
              <a class="stretched-link text-gray-900" href="#" title="Card 1">
                Card 1
              </a>
            </h3>
            <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01"
              >1st January 2019</time
            >
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
