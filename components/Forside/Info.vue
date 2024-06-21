<template>
  <section class="bg-cyangreen">
    <main class="wrapper py-16 md:py-24 grid md:flex">
      <div class="md:w-1/2">
        <span class="">
          <h2 class="quoteTwo header">DIT FORTRUKNE INSTRUMENT VÆRKSTED</h2>
          <p class="quote_text text-[1.2rem] md:text-[1.35rem] mt-2">
            At overlade sit højtelskede instrument til en anden person kræver tillid - især når det gælder reparationer!
            <br><br>
            Hos Musik Mekanikeren er dit instrument i trygge & kyndige hænder og vil altid komme retur i sin bedste stand.
Efter mere end 20 års erfaring inden for musikbranchen ved vi, hvad det vil sige at servicere musik-instrumenter - hvad enten det drejer sig om Strengeinstrumenter, Trommer & Slagtøj, Klaverer & Keyboards, Forstærkere, PA osv..
            <br><br>
            Musik Mekanikeren har alverdens specialværktøj til rådighed til alle typer opgaver og dét kombineret med stor ekspertise og nørderi, gør for mange Musik Mekanikeren til deres foretrukne instrumentværksted!

          </p>
        </span>
      </div>
      <div class="md:w-1/2 relative">
        <img
          class="md:w-[26em] gsapimg m-auto relative z-10 rounded-lg"
          src="https://i.ibb.co/cgnFR61/Musik-Mekanikeren-Kaare-Headshot-Profile-1-2.jpg"
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
import { ref, onMounted, onBeforeUnmount } from "vue";

onMounted(async () => {
  // Register gsap plugin
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline(),
    myInfoText = new SplitText(".quoteTwo", { type: "words,chars" }),
    chars = myInfoText.chars; //an array of all the divs that wrap each character

  gsap.set(".quoteTwo", { perspective: 400 });

  // Set initial states for animated elements
  gsap.set(chars, { opacity: 1 });
  gsap.set(".quote_text", { opacity: 1 });
  gsap.set(".dotsBlue", { opacity: 0 });
  gsap.set(".gsapimg", { y: "0%" });

  /* console.log(chars); */

  ScrollTrigger.create({
    animation: tl,
    trigger: ".quoteTwo",
    start: "top 75%",
    end: "bottom center",
    scrub: 1,
    onEnter: () => tl.restart(),
    onLeave: () => tl.pause(),
    onEnterBack: () => tl.restart(),
    onLeaveBack: () => tl.pause(),
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
        duration: 0.8,
        opacity: 0,
      },
      "-=0.4"
    ) // This will start 0.4 seconds before the previous animation ends.
    .to(
      ".dotsBlue",
      {
        duration: 0.8,
        opacity: 1,
        top: "75px",
      },
      "-=0.2"
    ) // This will start 0.2 seconds before the previous animation ends.
    .from(
      ".gsapimg",
      {
        duration: 0.8,
        y: "-10%",
      },
      "-=0.2"
    );
  onBeforeUnmount(() => {
    myInfoText.revert();
  });
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
  left: 68px;
  top: 180px;
  @apply max-h-[234px] max-w-[234px] md:max-h-[600px] md:max-w-[600px];
}
</style>
