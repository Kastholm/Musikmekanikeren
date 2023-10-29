<template></template>




<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/vue/20/solid";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/vue/20/solid";
import { SanityBlocks } from "sanity-blocks-vue-component";
const router = useRouter();
const route = useRoute();
const kategori = ref("");
const data = ref([]);
onMounted(async () => {
  try {
    const type = router.currentRoute.value.query.type;
    kategori.value = route.params.kategori;
    console.log("Hentet type:", type);
    console.log("Hentet kategori:", kategori.value);
    let query;

    query = groq`*[_type == "${type}" && title == "${kategori.value}"]`;

    console.log("Benyttet query:", query);
    const result = await useSanityQuery(query);
    console.log("Komplet result objekt:", result);
    data.value = result.data._rawValue;
    console.log("Overordnet data:", data.value);
  } catch (error) {
    console.error("Der opstod en fejl under hentning af data:", error);
  }
});
</script>
