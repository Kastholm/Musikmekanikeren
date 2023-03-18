<template>
  <section class="bg-cyangreen">
    <main class="wrapper py-20 grid md:flex">
      <div class="md:w-1/2">
        <span class="">
          <h2 class="quoteTwo header">DIT FORTRUKNE INSTRUMENT VÆRKSTED</h2>
          <h5 class="quote_text">
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
          src="https://images-ext-1.discordapp.net/external/fdbZQta670jFTyPb0wwIzsR9cRDYDOngtis5xtN44g4/%3Fetag%3D%25221b9763-5be21834%2522%26sourceContentType%3Dimage%252Fjpeg%26quality%3D85/https/musikmekanikeren.dk/____impro/1/onewebmedia/Privat/Musik%2520Mekanikeren%2520Lodning%2520Elektronik.JPG?width=689&height=722"
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
        top: "125px",
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
  @apply md:text-6xl leading-snug;
}
.dotsBlue {
  width: 100%;
  height: auto;
  max-width: 434px;
  max-height: 434px;
  z-index: 0;
  left: 30px;
  top: 180px;
}
</style>
