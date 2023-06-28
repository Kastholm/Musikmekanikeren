<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

//Navigating to a new page in the select
const navigate = (event) => {
  const router = useRouter();
  router.push(event.target.value);
};

onMounted(async () => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });

  timeline
    .from(".mainNav", { y: "-100%", ease: "bounce" })
    .from(".mainNav li", {
      opacity: "0",
      stagger: 0.1,
      onComplete: animateBackground,
    });

  function animateBackground() {
    const bg = gsap.timeline({ yoyo: true, repeat: 1 });

    bg.to(".mainNav", { duration: 0.5, ease: "none" }).from(".mainNav a", {
      x: "-100%",
      stagger: 0.1,
    });
  }
  gsap.registerPlugin(ScrollTrigger);
  // BG Effect
  const navBg = gsap.timeline();
  navBg.to(".mainNav", {
    duration: 0.5,
    ease: "none",
    backgroundColor: "#222222",
  });
  // Create scrolltrigger
  ScrollTrigger.create({
    animation: navBg,
    trigger: ".mainNav",
    scrub: 1,
    markers: true,
    start: "top -10% ",
    end: "bottom 20%",
    toggleActions: "restart none none none",
  });
});
</script>
<template>
  <header class="hidden sm:inline">
    <nav class="mainNav hidden sm:inline">
      <ul>
        <li><NuxtLink to="/">Forside</NuxtLink></li>
        <li><NuxtLink to="/Service">Service</NuxtLink></li>
        <li><NuxtLink to="/Skoleservice">Skoleservice</NuxtLink></li>
        <span class="logo-bg"
          ><img
            class="logo"
            src="https://kiwswbakieolzufmufjq.supabase.co/storage/v1/object/public/public/logo.png"
            alt=""
        /></span>
        <li><NuxtLink to="/projekter"> Projekter</NuxtLink></li>
        <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
        <li><NuxtLink to="/omos"> Om os</NuxtLink></li>
        <!-- <li><NuxtLink to="/shop">Shop</NuxtLink></li> -->
        <!-- <li>
          <NuxtLink @change="navigate">
            <select>
              <option value="/kontakt">Kontakt</option>
              <option value="/omos">Om os</option>
            </select>
          </NuxtLink>
        </li> -->
      </ul>
    </nav>
    <nav class="phoneNav"></nav>
  </header>
  <phone-nav />
  <!-- <ul class="links">
        <li><NuxtLink to="/">Forside</NuxtLink></li>
        <li><NuxtLink to="/Service">Service</NuxtLink></li>
        <li><NuxtLink to="/Skoleservice">Skoleservice</NuxtLink></li>
        <li><NuxtLink to="/projekter"> Projekter</NuxtLink></li>
        <li><NuxtLink to="/omos">Om os </NuxtLink></li>
        <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
      </ul> -->
</template>

<style scoped>
.router-link-active {
  position: relative;
}

.router-link-active::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #fbfbfb;
  transform: translateX(-50%);
  transition: width 0.3s ease-in-out;
}

.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: transparent;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
}

.router-link-active:hover::after {
  background-color: rgba(26, 255, 0, 0.2);
  transform: translateX(-50%) scaleX(1.1);
}

.router-link-active::before {
  width: 100%;
}
select,
select option {
  background: none !important;
}
.mainNav {
  @apply text-smooth hidden md:block w-screen fixed z-50;
  background-color: rgba(34, 34, 34, 0.3);
}
.mainNav .logo {
  @apply w-[13em] h-[8em] absolute top-0;
}
.logo-bg {
  @apply w-[13em] h-[7.4em] relative;
}
.logo-bg::before {
  content: "";
  @apply bg-Metric;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 23%;
  height: 100%;
  width: 57%;
  border-radius: 100%;
}
.mainNav ul {
  @apply flex justify-center  h-20 overflow-visible;
}
.mainNav li {
  @apply m-auto;
}

/* .phoneNav {
  @apply text-smooth text-center h-36 block lg:hidden bg-red-800;
} */
.phoneNav .logo {
  @apply w-[14em] m-auto fixed;
}
.burger {
  @apply fixed right-8 scale-110;
}
.phoneNav ul {
  @apply text-8xl grid place-content-center text-center /* h-screen w-screen */;
}
.phoneNav li {
  @apply text-8xl hidden;
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.ham1 .top {
  stroke-dasharray: 40 139;
}
.ham1 .bottom {
  stroke-dasharray: 40 180;
}
.ham1.active .top {
  stroke-dashoffset: -98px;
}
.ham1.active .bottom {
  stroke-dashoffset: -138px;
}
</style>
