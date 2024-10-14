import imageUrlBuilder from "@sanity/image-url";

export default defineNuxtPlugin(() => {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.config);
  function urlFor(source) {
    return builder.image(source).auto("format");
  }
  return {
    provide: { urlFor },
  };
});
