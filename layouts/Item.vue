<template>
  <div class="flex flex-col md:gap-28 gap-20">
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#ffaa00 0%,#BFBFAE 50%,#ffcc00 100%)"
    />
    <slot />

    <SimpleFooter />
  </div>
</template>

<script setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value == "ar" ? "rtl" : "ltr",
  },
});
</script>

<style scoped></style>
