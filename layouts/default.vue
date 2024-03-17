<template>
  <Nav />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script></script>

<style>
@import url("https://use.typekit.net/rwl1ktr.css");


html {
  scroll-behavior: smooth;
}

body {
  @apply text-smooth overflow-x-hidden bg-Metric;
}
.wrapper {
  @apply max-w-[1640px] xl:m-auto px-4 md:px-12;
}
/* Styling af Scrollbar */
::-webkit-scrollbar {
  @apply w-2;
}
::-webkit-scrollbar-track {
  @apply bg-gradient-to-t bg-Metric to-smooth;
}
::-webkit-scrollbar-thumb {
  @apply bg-cyangreen;
}

/* Responsive tags der ændrer størrelse udfra skørmstørrelse */
/* 640px smaller */
@media screen and (max-width: 31em) {
  html {
    font-size: 4.2vw;
  }
}
@media screen and (max-width: 23em) {
  html {
    font-size: 5vw;
  }
}
/* 640px bigger */
@media screen and (min-width: 31em) {
  html {
    font-size: 3vw;
  }
}
@media screen and (min-width: 40em) {
  html {
    font-size: 2.5vw;
  }
}
@media screen and (min-width: 50em) {
  html {
    font-size: 1.05em;
  }
}
/* *{
  @apply text-smooth;
} */
p {
  font-family: "source-sans-3", sans-serif;
  font-weight: 400;
  font-style: normal;
  @apply text-[1.1rem];
}
h1,
h2,
h3,
.header,
.tab-title {
  font-family: "niveau-grotesk", sans-serif !important;
  font-weight: 600;
  font-style: normal;
  /* font-family: "montserrat", sans-serif;
font-weight: 600;
font-style: normal; */
  @apply uppercase;
}
h4 {
  @apply text-3xl;
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #000;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
