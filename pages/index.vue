<template>
  <NuxtPage />
  <ForsideHero />
  <ForsideTestimonials />
  <ForsideInfo />
  <ForsideServices />
  <ForsideInstrumenter />
  <ForsideShortcuts />
  <div>
    <main>
      <!-- <h2>Pets</h2>
      <ul v-if="data?.length">
        <li v-for="pet in data" v-bind:key="pet._id">
          {{ pet.name }}
        </li>
      </ul> -->
      <!-- <p v-else>No pets to show</p>
      <h2>Data</h2>
      <div v-if="data">
        <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
      <div v-else>
        <div>¯\_(ツ)_/¯</div>
        <p>
          Your data will show up here when you've configured everything
          correctly
        </p>
      </div> -->
    </main>
  </div>
</template>

<script setup>
const query = groq`*[_type == "pet"]`;
const { data } = useSanityQuery(query);
</script>

<style></style>
