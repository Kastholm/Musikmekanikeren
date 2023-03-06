<template>
  <section class="heroBg">
     <div class="heroShadow">
          <span>
               <h1 class="quote">Jeres <br>Foretrukne<br>
               Musik værksted</h1>
          </span>
     </div>
  </section>
           

  
</template>

<script setup>
import { gsap } from "gsap";
import { SplitText } from 'gsap/SplitText';
import { onMounted} from "vue";

onMounted(async () => { 
// Register gsap plugin
  gsap.registerPlugin(SplitText);

  var tl = gsap.timeline(),
  mySplitText = new SplitText(".quote", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set(".quote", { perspective: 400 });

tl
.from(chars, {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  y: 80,
  rotationX: 180,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.01,

})

});
</script>

<style>
.heroBg {
     background-image: url("https://musikmekanikeren.dk/____impro/1/onewebmedia/Shop/Produkter/KATEGORI/Musik%20Mekanikeren%20Brugte%20Instrumenter%20Guitar%20&%20Bas.jpg?etag=%223e2b3f-61533a92%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1150,862&extract=0,212,1150,437");
     @apply bg-cover block w-screen h-[35em] relative;
}
.heroShadow {
     @apply bg-black/0 h-[35em] relative;
}
.heroBg span {
     @apply block text-[14em] absolute left-4 bottom-0 leading-[.8em];
}
</style>