<script setup>
import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted} from "vue";

onMounted(async () => { 

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

 // Floating Banner Effect
  const banner = gsap.timeline();
// Position animated banner center
  banner
    .from(".float", { x: "-50%" }, 0)
    .from(".float span", { opacity: 1 }, 0)
    .to('.circlePath', {clipPath: 'circle(0%)'})
    .to('.circlePath', {clipPath: 'circle(10%)'})
    .to('.circlePath', {clipPath: 'circle(30%)'})
    .to('.circlePath', {clipPath: 'circle(50%)'})
    .to('.circlePath', {clipPath: 'circle(70%)'})
    .to('.circlePath', {clipPath: 'circle(80%)'})
    .to('.circlePath', {zIndex: '0'})
    
   
  // Create scrolltrigger
  ScrollTrigger.create({
    animation: banner,
    trigger: ".float",
    scrub: 1,
    start: "top 90% ",
    end: "bottom 20%",
    toggleActions: "restart none none none",
  });


 

let tabs = document.querySelectorAll('.tab-title');

tabs.forEach(tab => {
  tab.addEventListener('click', () => { 
    let tab_tl = gsap.timeline();
      tab_tl
        .fromTo(CSSRulePlugin.getRule(".tab-active::after"),{
           duration: .1,
           left: '100%',
           ease: 'power4'
        }, {
          left: '0%',
        }, 0)
       .from('.showcase_img', {
         duration: .3,
         scale: 0.5,
         opacity: 0,
         ease: 'back.out(1.7)',
         stagger: 0.2,
           onComplete: function() {
             gsap.to('.showcase_img', {
               duration: 0.3,
               /* scale: 1.1, */
                 });
               }
       }, 0)
       .from('.showcase_text span', {
          opacity: 0,
          stagger: 0.2,
       })
});

});




}) ;




</script>
<template >

<div class="overflow-hidden w-full relative">
     <div class="float flex justify-center items-center py-4 font-bold text-[4rem] lg:text-[8rem] xl:text-[12rem] font-header text-zinc-100 space-x-8 lg:space-x-16">
     <span class="opacity-25">HJEM</span>
     <span class="opacity-25">HJEM</span>
     <span>HJEM</span>
     <span class="opacity-25">HJEM</span>
     <span class="opacity-25">HJEM</span>
     </div>
</div>
          <!-- <div class="circlePath"></div> -->
<section class="wrapper relative portfolio">
          <h2>Vores Projekter</h2>
            <ServiceTabs>
                    <ServiceTab title="Service" class="showcase">
                         <div class="tab_content">
                         <div class="showcase_img" style='background-image: url("https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");'>
                         <h3 class="showcase_title">Hej</h3>
                         </div>
                         <div class="showcase_text">
                              <span>
                                   Our Role
                                   Visual Branding
                                   UX/UI Design
                                   Custom Modular Development
                              </span>
                              <span>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt excepturi illo eligendi quisquam. Distinctio suscipit sunt hic excepturi deleniti harum?</span>
                         </div>
                    </div>
                    </ServiceTab>
          
                    <ServiceTab class="showcase" title="Skoleservice">
                    <div class="tab_content">
                         <div class="showcase_img" style='background-image: url("https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");'>
                         <h3 class="showcase_title">Hej</h3>
                         </div>
                         <div class="showcase_text">
                              <span>
                                   Our Role
                                   Visual Branding
                                   UX/UI Design
                                   Custom Modular Development
                              </span>
                              <span>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt excepturi illo eligendi quisquam. Distinctio suscipit sunt hic excepturi deleniti harum?</span>
                         </div>
                    </div>
                    </ServiceTab>
          
            </ServiceTabs>
   
</section>

</template>

<style>
.circlePath{
  clip-path: circle(0% at 50% 0%);
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  overflow: visible;
  background: #191919;
}

.portfolio{ 
@apply bg-yellow-200 py-4;
}
.tabs {
  @apply grid;
}
.tabs-titles {
  @apply grid grid-cols-2 text-center;
}
.tab-title {
  @apply mt-6 pb-2 opacity-40 text-[3rem] hover:opacity-100 rounded-t-lg;
  transition: .2s;
}
.tabs-content{
  @apply bg-red-800 p-4;
  transition: .2s;
}
.tab_content{
     @apply relative md:flex;
}
.tab-active{
  @apply  opacity-100 text-[3.3rem] relative bg-red-800 ;
  transition: .2s;
}
.tab-active::after{
     content: '';
     position: absolute;
     bottom: 0;
     right: 0;
    /*  left: 100%; */
     border-bottom: 2px solid rgb(218, 178, 19);
}
.showcase_img{
     @apply w-[100%] bg-cover h-[28em] relative m-auto;
}
.showcase_title{
     @apply text-[8rem] absolute -bottom-10 uppercase;
}
.showcase_text{
     @apply grid gap-4;
}
.showcase_text span{
     @apply mx-8 p-4 bg-smooth;
}


</style>