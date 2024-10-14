<script setup>
import { pageQuery } from "@/queries/contentQueries";

definePageMeta({
  validate({ params }) {
    const mainStore = useMainStore();
    if (
      !mainStore.slugs.pages.includes(params.slug) &&
      !mainStore.previewIsActive
    ) {
      return createError({
        statusCode: 404,
        message: "Page not found",
      });
    }

    return true;
  },
});

// get data
const mainStore = useMainStore();
const route = useRoute();
const params = {
  slug: route.params.slug,
};
const data = await useSanityData({
  query: pageQuery,
  params: params,
});

// meta
usePageHead({ title: data.value?.title, seo: data.value?.seo });
</script>

<template>
  <div id="page">
    <div v-if="data"></div>
  </div>
</template>

<style lang="scss" module></style>
