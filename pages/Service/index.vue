<template>
  <ServicesHero />
  <section class="infoContainer">
    <div class="infoField container">
      <h1>Hvorfor vælge Musikmekanikeren?</h1>
      <h2>
        Personligt har jeg det på samme måde, når jeg afleverer bilen hos
        mekanikeren - man ønsker den tilbage så den både føles, kører og ser ud
        i sin bedst mulige stand! Jeg tager hver enkelt opgave meget seriøst og
        sætter en ære i at fastholde mit gode ry og rygte. i selve arbejdet
        anvender jeg kun de bedste værktøjer og metoder til den pågældende
        opgave og yder altid fuld garanti på alle udførte opgaver! Musik
        Mekanikeren's værksted har til huse i ny-renoverede lokaler som er
        special-indrettede til instrument-reparation - du kan derfor være helt
        tryg ved at dit musikudstyr bliver både opbevaret og serviceret helt
        forsvarligt. Nedenfor kan du læse et udvalg af de forskellige
        service-opgaver og de mest hyppige årsager til hvorfor de lander på
        arbejdsbænken. Har du uddybende spørgsmål til en service - eller dit
        instrument generelt - er du velkommen til at kontakte værkstedet.
      </h2>
    </div>
  </section>
  <ServicesCards />
</template>

<script>
export default {};
</script>

<style>
.infoContainer {
  @apply bg-smooth;
}
.infoField {
  @apply m-auto text-Metric p-12 text-center;
}
.infoField h1 {
  @apply text-6xl mb-4;
}
.infoField h2 {
  @apply text-lg font-normal;
}
</style>
