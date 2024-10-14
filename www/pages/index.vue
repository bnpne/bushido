<script setup>
import { homeQuery } from "@/queries/contentQueries";

// get data
const mainStore = useMainStore();
const data = await useSanityData({
  query: homeQuery,
});

// meta
usePageHead({
  title: "",
});
</script>

<template>
  <div id="page">
    <div v-if="data"></div>
  </div>
</template>

<style lang="scss" module></style>
