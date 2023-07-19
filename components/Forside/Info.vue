<template>
  <section class="bg-cyangreen">
    <main class="wrapper py-32 md:py-24 grid md:flex">
      <div class="md:w-1/2">
        <span class="">
          <h2 class="quoteTwo header">DIT FORTRUKNE INSTRUMENT VÆRKSTED</h2>
          <h5 class="quote_text text-[1.2rem] md:text-[1.35rem] mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            cumque velit, nostrum nesciunt at placeat, blanditiis illum ex
            dolores, in cum odio incidunt ratione maiores dolorum eveniet? Optio
            molestiae dolorem quidem laboriosam maxime officia consequatur nulla
            doloribus ipsam unde odit consectetur, qui quae natus quos beatae
            aut debitis cupiditate minima.
          </h5>
        </span>
      </div>
      <div class="md:w-1/2 relative">
        <img
          class="md:w-[30em] gsapimg m-auto relative z-10"
          src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Shop/Produkter/KATEGORI/Musik%20Mekanikeren%20Brugte%20Instrumenter%20Guitar%20&%20Bas.jpg?etag=%223e2b3f-61533a92%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=340%2B255&extract=0%2B3%2B340%2B252&quality=85"
          alt=""
        />
        <img
          class="dotsBlue clusterPieces absolute"
          src="/img/dots_blue.svg"
          style="transform: translate(0%, 2.654%) translate3d(0px, 0px, 0px)"
        />
      </div>
    </main>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
onMounted(async () => {
  // Register gsap plugin
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline(),
    myInfoText = new SplitText(".quoteTwo", { type: "words,chars" }),
    chars = myInfoText.chars; //an array of all the divs that wrap each character

  gsap.set(".quoteTwo", { perspective: 400 });

  /* console.log(chars); */

  ScrollTrigger.create({
    animation: tl,
    trigger: ".quoteTwo",
    //markers:true,
    start: "top 75%",
    end: "bottom center",
    scrub: 1,
  });
  tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  })
    .from(
      ".quote_text",
      {
        opacity: 0,
      },
      1
    )
    .to(
      ".dotsBlue",
      {
        opacity: 1,
        top: "75px",
      },
      1
    )
    .from(
      ".gsapimg ",
      {
        y: "-10%",
      },
      1
    );
});
</script>

<style>
.quote,
.quoteTwo {
  @apply text-4xl md:text-6xl leading-snug;
}
.dotsBlue {
  width: 100%;
  height: auto;
  z-index: 0;
  opacity: 0;
  left: 30px;
  top: 180px;
  @apply max-h-[234px] max-w-[234px] md:max-h-[434px] md:max-w-[434px] ;
}
</style>
