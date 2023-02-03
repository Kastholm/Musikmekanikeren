<script>
export default {

}
</script>
<template>
  <header>
     <nav class="mainNav">
          <ul>
               <li><NuxtLink to='/'>Forside</NuxtLink> </li>
               <li><NuxtLink to='/Service'>Service</NuxtLink></li>
               <li><NuxtLink to='/Skoleservice'>Skoleservice</NuxtLink> </li>
               <img class="logo" src="/img/logo.png" alt="">
               <li><NuxtLink to='/projekter'> Projekter</NuxtLink></li>
               <li><NuxtLink to="/omos">Om os </NuxtLink></li>
               <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
          </ul>
     </nav>
  </header>

</template>

<style>
.mainNav {
     @apply text-smooth ;
}
.logo{
     @apply w-[14em] ;
}
.mainNav ul {
     @apply flex justify-center;
}
.mainNav li {
     @apply m-auto;
}
</style>