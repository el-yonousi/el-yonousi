<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#ffaa00 0%,#BFBFAE 50%,#ffcc00 100%)"/>
    <NavBar />
    <slot />
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