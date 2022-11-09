<template>
  <div class="shadow-md p-3 dark:bg-dark-2 dark:text-dark-4 h-full mt-7 max-w-sm mx-auto text-center rounded">
    <p v-if="error.statusCode" class="mt-7 md:text-7xl text-6xl font-bold" v-text="error.statusCode" />
    <p class="mt-7 md:text-6xl text-4xl" v-text="'Ooops.'" />
    <p v-if="error.message" class="mt-7" v-text="error.message" />
    <p v-if="error.stack" class="mt-7" v-text="error.stack" />
    <button @click="handleClearError" class="btn capitalize my-7 border border-dark-3 py-2 px-3 rounded hover:bg-dark-3 transition-all duration-300 ease-in-out">go back to home</button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
// console.log(error);
const handleClearError = () => clearError({ redirect: "/" });
</script>
