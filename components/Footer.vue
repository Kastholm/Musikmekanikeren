<template>
<BaseShortcuts />
<footer class="relative bg-blueGray-200 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray-700">Musik Mekanikeren®</h4>
        <h5 class="text-lg mt-3 mb-4 text-blueGray-600">
          Musik Mekanikeren blev stiftet i 2015, og har siden da udført reparationer og service på hundredvis af diverse instrumenter og forstærkere.
        </h5>
        <img src="https://cdn.sanity.io/images/1f5ltia2/production/512bbd4914d06fd46e1dfca3086b178d042e7f4c-322x208.png" class=" max-h-[15vh]">
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6 gap-20">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-xl font-semibold mb-2">Andre links</span>
            <ul class="list-unstyled">
              <NuxtLink to="/service"><li>
                <p class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base">Service</p>
              </li></NuxtLink>
              <NuxtLink to="/skoleservice"><li>
                <p class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base">Skoleservice</p>
              </li></NuxtLink>
              <NuxtLink to="/projekter"><li>
                <p class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base">Projekter</p>
              </li></NuxtLink>
              <NuxtLink to="/Omos"><li>
                <p class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base">Om os</p>
              </li></NuxtLink>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4 flex flex-col justify-center">
            <span class="block uppercase text-blueGray-500 text-xl font-semibold mb-2">Kontakt os</span>
            <ul class="list-unstyled">
              <li class="inline-flex">
                <svg fill="#000000" height="40" viewBox="0 0 24 24" id="house-storm" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color mr-2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M20.58,9.9l-8-5.71a1,1,0,0,0-1.16,0l-8,5.71a1,1,0,0,0,1.16,1.62l.42-.3V21a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11.22l.42.3a1,1,0,0,0,.58.19,1,1,0,0,0,.58-1.81Z"
                    style="fill: #000000;"></path><path id="primary-2" data-name="primary" d="M20,22H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" style="fill: #FFFFFF;"></path><path id="secondary"
                    d="M15,15v6a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h4A1,1,0,0,1,15,15Zm1.89-3.55,2-4A1,1,0,0,0,18,6H15.62l1.27-2.55a1,1,0,0,0-1.78-.9l-2,4A1,1,0,0,0,14,8h2.38l-1.27,2.55a1,1,0,0,0,.44,1.34A.93.93,0,0,0,16,12,1,1,0,0,0,16.89,11.45Z"
                    style="fill: #263d3e;"></path></g></svg>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold text-base flex items-center min-w-[270px]"> Jørgensens Allè 28 | 8722 Hedensted</a>
              </li>
              <li class="inline-flex">
                <svg fill="#000000" height="40" viewBox="0 0 24 24" id="email" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line mr-2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                   stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M20.61,5.23l-8,6.28a1,1,0,0,1-1.24,0l-8-6.28A1,1,0,0,0,3,6V18a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V6A1,1,0,0,0,20.61,5.23Z" style="fill: #263d3e;
                   stroke-width: 2;"></path><path id="primary" d="M20,19H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H20a1,1,0,0,1,1,1V18A1,1,0,0,1,20,19ZM20,5H4a1,1,0,0,0-.62.22l8,6.29a1,1,0,0,0,1.24,0l8-6.29A1,1,0,0,0,20,5Z" style="fill: none; stroke: #000000;
                   stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold pb-2 text-base flex items-end" href="https://creative-tim.com/terms?ref=njs-profile">Kaare@musikmekanikeren.dk</a>
              </li>
              <li class="inline-flex">
                <svg fill="#000000" viewBox="0 0 24 24" height="40" id="phone-error-left-4" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line mr-2"><g id="SVGRepo_bgCarrier"
                     stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect id="secondary" x="6" y="3"
                     width="12" height="18" rx="1" style="fill: #263d3e; stroke-width: 2;"></rect><line id="primary-upstroke" x1="12.05" y1="17" x2="11.95" y2="17" style="fill: none;
                     stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.5;"></line><path id="primary" d="M6,9V4A1,1,0,0,1,7,3H17a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H11"
                     style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><line id="primary-2" data-name="primary" x1="6" y1="13" x2="6" y2="16"
                     style="fill: none; stroke: #FFFFFF; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line id="primary-upstroke-2" data-name="primary-upstroke" x1="6.05" y1="20.5"
                     x2="5.95" y2="20.5" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.5;"></line></g></svg>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold text-base flex items-center" href="https://creative-tim.com/privacy?ref=njs-profile">602 17 602</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span>
          <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-[#263d3e]" target="_blank"> Musik Mekanikeren </a>
          <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800 hover:text-[#263d3e]">- Udviklet og hosted af Webtify.dk</a>
        </div>
      </div>
    </div>
    
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style>
.contact {
  @apply grid;
  place-content: start center;
}
.footerContent div {
  @apply relative;
  
}
</style>