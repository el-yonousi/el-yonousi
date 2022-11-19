<template>
  <nav
    class="fixed border-dark-4 shadow-[0_0_1px_0px_rgba(255,255,255,0.3)] dark:bg-dark-1 dark:bg-opacity-80 left-0 md:top-2/4 bottom-0 md:translate-y-[-50%] md:w-fit w-full h-fit z-50 flex md:flex-col flex-row justify-center items-center gap-3 transition-all duration-700"
  >
    <a
      v-for="item in navbars"
      :key="item.name"
      :href="item.href"
      :title="item.name"
      class="font-bold truncate capitalize dark:text-slate-300 text-gray-500 dark:hover:text-slate-400 hover:text-gray-900 md:px-6 px-4 md:py-4 py-2 flex justify-evenly transition-all duration-700"
      :class="{ active: item.current }"
      :aria-label="item.name"
    >
      <Icon
        class="dark:text-dark-4 dark:hover:text-casetrue w-7 h-7 transition-all duration-700"
        :name="item.icon"
      />
    </a>
  </nav>
</template>

<script setup>
const { navbars } = await $fetch("/api/navbars");

if (!navbars) {
  throw createError({
    statusCode: 404,
    statusMessage: "NavBar Data not found",
    fatal: true,
  });
}
</script>
