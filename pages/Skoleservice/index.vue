<template>
  <section id="abc">
    <SkoleservicesHero />
    <SkoleservicesBeforeAfter />
    <SkoleservicesIndividuel />
  </section>
</template>

<script setup>
/* import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText"; */
import { onMounted } from "vue";
import * as THREE from "three";
/* import p5 from "p5"; */
/* import * as P5 from "p5"; */
import FOG from "vanta/dist/vanta.fog.min";

onMounted(async () => {
  /*  // Register gsap plugin
  gsap.registerPlugin(SplitText);

  var tl = gsap.timeline(),
    mySplitText = new SplitText(".quote", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

  gsap.set(".quote", { perspective: 400 });

  tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });
 */
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
