<template>
  <header>
    <h1
      class="lg:text-5xl md:text-4xl text-3xl tracking-tight font-bold dark:text-casetrue text-gray-900 capitalize mb-16"
      :class="classes"
    >
      <slot></slot>
    </h1>
  </header>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  classes: String,
});
</script>
