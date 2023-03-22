<script setup>
import { ref } from "vue";
import ImageCompare from "image-compare-viewer";
import { onMounted } from "vue";
import "image-compare-viewer/dist/image-compare-viewer.min.css";

onMounted(async () => {
  const viewers = document.querySelectorAll(".image-compare");
  console.log(viewers);
  viewers.forEach((element) => {
    let view = new ImageCompare(element).mount();
  });
  console.log(viewers);
});
</script>

<template>
  <section class="z-10 relative wrapper">
    <div class="max-w-[40em] max-h-[40em] m-auto">
      <h2>FørEfter</h2>
      <div class="image-compare">
        <img
          src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20F%C3%98R.jpg?etag=%22f7e03-61d8bfc9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1384%2B1038&extract=0%2B0%2B1384%2B1016&quality=85"
          alt=""
        />
        <img
          src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20EFTER.jpg?etag=%22fe73f-61d8bfca%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1448%2B1086&extract=0%2B16%2B1440%2B1012&quality=85"
          alt=""
        />
      </div>
    </div>
    <div class="max-w-[40em] max-h-[40em] m-auto">
      <h2>FørEfter</h2>
      <div class="image-compare">
        <img
          src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20F%C3%98R.jpg?etag=%22f7e03-61d8bfc9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1384%2B1038&extract=0%2B0%2B1384%2B1016&quality=85"
          alt=""
        />
        <img
          src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20EFTER.jpg?etag=%22fe73f-61d8bfca%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1448%2B1086&extract=0%2B16%2B1440%2B1012&quality=85"
          alt=""
        />
      </div>
    </div>
    <div class="max-w-[40em] max-h-[40em] m-auto">
      <h2>FørEfter</h2>
      <div class="image-compare">
        <img
          src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20F%C3%98R.jpg?etag=%22f7e03-61d8bfc9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1384%2B1038&extract=0%2B0%2B1384%2B1016&quality=85"
          alt=""
        />
        <img
          src="https://musikmekanikeren.dk/____impro/1/onewebmedia/Kundemappe/Skoleservice/Musik%20Mekanikeren%20Skole%20Service%20Indretning%20Assentoftskolen%20EFTER.jpg?etag=%22fe73f-61d8bfca%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1448%2B1086&extract=0%2B16%2B1440%2B1012&quality=85"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style></style>
