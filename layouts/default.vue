<template>
 <Nav />
  <main>
      <slot /> 
  </main>
 <Footer />
</template>

<script>
export default {

}
</script>

<style>
  body {
    @apply bg-Metric;
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
</style>