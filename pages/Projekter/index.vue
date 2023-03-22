<template>
  <section id="abc">
    <ProjekterHero />
    <ProjekterImageGrid />
  </section>
</template>

<script setup>
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
