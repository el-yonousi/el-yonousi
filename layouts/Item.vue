<template>
  <div class="flex flex-col md:gap-28 gap-20">
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#ffaa00 0%,#BFBFAE 50%,#ffcc00 100%)"/>
    <slot/>

    <SimpleFooter/>
  </div>
</template>

<script setup>

</script>

<style scoped></style>