<script setup>
import { singleProjectQuery } from "@/queries/contentQueries";

definePageMeta({
  validate({ params }) {
    const mainStore = useMainStore();
    if (
      !mainStore.slugs.projects.includes(params.slug) &&
      !mainStore.previewIsActive
    ) {
      return createError({
        statusCode: 404,
        message: "Project not found",
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
  query: singleProjectQuery,
  params: params,
});

// meta
usePageHead({
  title: data?.value?.title,
  seo: data?.value?.seo,
  titleImage: data?.value?.titleImage,
});
</script>

<template>
  <div id="page">
    <div v-if="data"></div>
  </div>
</template>

<style lang="scss" module></style>
