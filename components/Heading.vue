<template>
  <header>
    <h1 class="
    md:text-4xl text-2xl 
    tracking-tight font-bold 
    dark:text-casetrue text-gray-900 
    capitalize
    mb-16" :class="classes" v-text="text"></h1>
  </header>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: false,
    },
  },
  methods: {},
};
</script>
