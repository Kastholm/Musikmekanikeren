<script setup>
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

onMounted(async () => {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const banner = gsap.timeline();
  // Position animated banner center
  banner
    .from(".float", { x: "-50%" }, 0)
    .from(".float span", { opacity: 1 }, 0)
    .to(".circlePath", { clipPath: "circle(0%)" })
    .to(".circlePath", { clipPath: "circle(10%)" })
    .to(".circlePath", { clipPath: "circle(30%)" })
    .to(".circlePath", { clipPath: "circle(50%)" })
    .to(".circlePath", { clipPath: "circle(70%)" })
    .to(".circlePath", { clipPath: "circle(80%)" })
    .to(".circlePath", { zIndex: "0" });

  // Create scrolltrigger
  ScrollTrigger.create({
    animation: banner,
    trigger: ".float",
    scrub: 1,
    start: "top 90% ",
    end: "bottom 20%",
    toggleActions: "restart none none none",
  });

  let tabs = document.querySelectorAll(".tab-title");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      let tab_tl = gsap.timeline();
      tab_tl
        .fromTo(
          CSSRulePlugin.getRule(".tab-active::after"),
          {
            duration: 0.1,
            left: "100%",
            ease: "power4",
          },
          {
            left: "0%",
          },
          0
        )
        .from(
          ".showcase_img",
          {
            duration: 0.3,
            scale: 0.5,
            opacity: 0,
            ease: "back.out(1.7)",
            stagger: 0.2,
            onComplete: function () {
              gsap.to(".showcase_img", {
                duration: 0.3,
                /* scale: 1.1, */
              });
            },
          },
          0
        )
        .from(".showcase_text span", {
          opacity: 0,
          stagger: 0.2,
        });
    });
  });
});
</script>
<template>
  <div class="overflow-hidden w-full relative">
    <div
      class="float flex justify-center items-center py-4 font-bold text-[4rem] lg:text-[8rem] xl:text-[12rem] font-header text-zinc-100 space-x-8 lg:space-x-16"
    >
      <span class="opacity-25">VELKOMMEN</span>
      <span class="opacity-25">VELKOMMEN</span>
      <span>VELKOMMEN</span>
      <span class="opacity-25">VELKOMMEN</span>
      <span class="opacity-25">VELKOMMEN</span>
    </div>
  </div>
  <div class="circlePath"></div>
  <section class="wrapper relative portfolio">
    <h2>Vores Services</h2>
    <ServiceTabs>
      <ServiceTab title="Service" class="showcase">
        <div class="tab_content">
          <div
            class="showcase_img"
            style="
              background-image: url('https://getpaidstock.com/tmp/[GetPaidStock.com]-64020433685fc.jpg');
            "
          >
            <h3 class="showcase_title">SERVICE</h3>
          </div>
          <div class="showcase_text">
            <span>
              <h4>Reperation af dit instrument</h4>
              <p>
                Jeg tager hver enkelt opgave meget seri??st og s??tter en ??re i at
                fastholde mit gode ry og rygte. i selve arbejdet anvender jeg
                kun de bedste v??rkt??jer og metoder til den p??g??ldende opgave og
                yder altid fuld garanti p?? alle udf??rte opgaver!
              </p>
            </span>
            <span>
              <h4>Reparation af et bred udvalg</h4>
              <ul class="space-y-3 text-cyangreen">
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Strengeinstrumenter
                </li>
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Trommer & Slagt??j
                </li>
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Forst??rkere & PA
                </li>
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Klaverer & Keyboards
                </li>
              </ul>
              <BaseButton>L??s mere</BaseButton>
            </span>
          </div>
        </div>
      </ServiceTab>

      <ServiceTab class="showcase" title="Skoleservice">
        <div class="tab_content">
          <div
            class="showcase_img"
            style="
              background-image: url('https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20EFTER.jpg?etag=%22fe73f-61d8bfca%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1448%2B1086&extract=0%2B16%2B1440%2B1012&quality=85');
            "
          >
            <h3 class="showcase_title">Skole ..</h3>
          </div>
          <div class="showcase_text">
             <span>
              <h4>Reperation af dit instrument</h4>
              <p>
                Vi ved at tiden er knap, rundt om p?? landets skoler og institutioner.
              </p>
              <p>Derfor tilbyder Musik Mekanikeren, at levere et velspillende -og organiseret musiklokale, hvor alle instrumenter samt udstyr, st??r klar til at spille p??.</p>
            </span>
            <span>
              <h4>Det f??r du med i l??sningen</h4>
              <ul class="space-y-3 text-cyangreen">
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Optimering
                </li>
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Fuldt servicetjek
                </li>
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Service p?? stedet
                </li>
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Kyndig vejledning
                </li>
                <li class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-cyangreen"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  L??sningsorienteret sparring 
                </li>
              </ul>
              <BaseButton>L??s mere</BaseButton>
            </span>
          </div>
        </div>
      </ServiceTab>
    </ServiceTabs>
  </section>
</template>

<style>
.circlePath {
  clip-path: circle(0% at 50% 0%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  overflow: visible;
  @apply bg-cyangreen;
}

.portfolio {
  @apply py-4;
}
.tabs {
  @apply grid;
}
.tabs-titles {
  @apply grid grid-cols-2 text-center;
}
.tab-title {
  @apply mt-6 pb-2 opacity-40 text-[3rem] hover:opacity-100 rounded-t-lg cursor-pointer;
  transition: 0.2s;
}
.tabs-content {
  @apply bg-Metric p-4;
  transition: 0.2s;
}
.tab_content {
  @apply relative rounded-lg py-6 flex flex-wrap align-baseline gap-[1em];
}
.tab-active {
  @apply opacity-100 text-[3.3rem] relative bg-Metric;
  transition: 0.2s;
}
.tab-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  /*  left: 100%; */
  border-bottom: 2px solid rgb(218, 178, 19);
}
.showcase_img {
  @apply bg-cover h-[36em] relative m-auto;
  flex-basis: 500px;
  flex-grow: 999;
}
.showcase_title {
  @apply text-[8rem] absolute -bottom-10 uppercase;
}
.showcase_text {
  @apply grid gap-4 text-cyangreen leading-relaxed;
  flex-basis: 550px;
  flex-grow: 1;
}
.showcase_text span {
  @apply mx-4 p-4 bg-smooth rounded-lg ;
}
.showcase_text h4 {
  @apply mb-4;
}
</style>
