<template>
 <Nav />
  <main>
      <slot /> 
  </main>
 <Footer />
</template>

<script setup>

</script>

<style>
@import url("https://use.typekit.net/rwl1ktr.css");
  body {
    @apply bg-Metric;
  }
.wrapper {
@apply max-w-[1640px] xl:m-auto px-12;
}
/* Styling af Scrollbar */
::-webkit-scrollbar {
  @apply w-2;
}
::-webkit-scrollbar-track {
  @apply bg-gradient-to-t bg-red-400 to-green-500
}
::-webkit-scrollbar-thumb {
  @apply bg-indigo-600;
}

/* Responsive tags der ændrer størrelse udfra skørmstørrelse */
@media only screen and (max-width: 40em) {
  html {
    font-size: 2.2vw;
  }
  p {
    font-size: 2.8vw;
  }
}
@media screen and (min-width: 40em) {
  html {
    font-size: 1.8vw;
  }
}
@media screen and (min-width: 50em) {
  html {
    font-size: 1.3vw;
  }
}
@media screen and (min-width: 62em) {
  html {
    font-size: 1em;
  }
}
/* *{
  @apply text-smooth;
} */
p {
  font-family: "source-sans-3", sans-serif;
font-weight: 400;
font-style: normal; 
}
h1, h2, h3, .header, .tab-title {
  font-family: "niveau-grotesk", sans-serif !important;
font-weight: 600;
font-style: normal;
/* font-family: "montserrat", sans-serif;
font-weight: 600;
font-style: normal; */
@apply uppercase;
}
</style>