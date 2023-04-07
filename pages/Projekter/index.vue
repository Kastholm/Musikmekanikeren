<template>
  <section id="abc">
    <ProjekterHero />
    <ProjekterImageGrid />
  </section>
</template>

<script setup>
// Page title / Meta Description start
import { ref } from 'vue'

const pageTitle = ref('Se projekter på div. insturmenter og forstærkere - Musik Mekanikeren')
const pageDescription = ref('Alle opgaver små som store fortjener en kompetent hånd - I årenes løb har vi hos Musik Mekanikeren haft nogle spændende projekter igennem butikken. Se dem her.')

const head = () => ({
  title: pageTitle.value,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pageDescription.value
    }
  ]
})
// Page title / Meta Description slut
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";
import * as THREE from "three";

import FOG from "vanta/dist/vanta.fog.min";

onMounted(async () => {
  // Register gsap plugin
  // window is only avaiable on browser
  /*  if (process.browser) { */
  window.THREE = THREE;
  const { default: FOG } = await import("vanta/dist/vanta.fog.min");
  FOG({
    el: "#abc",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x222222,
    midtoneColor: 0x273e3f,
    lowlightColor: 0x222222,
    baseColor: 0x222222,
    scale: 1.0,
    size: 5.0,
    speed: 0.9,
    THREE: window.THREE,
  });
  /*  } */
});
</script>

<style></style>
