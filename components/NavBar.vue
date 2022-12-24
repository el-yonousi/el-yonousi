<template>
  <nav
    class="fade fixed rtl:left-0 ltr:right-0 md:top-0 bottom-0 md:w-fit w-full h-fit flex flex-row justify-center items-center md:gap-3 z-50 border-dark-4 shadow-[0_0_1px_0px_rgba(255,255,255,0.3)] dark:bg-dark-1 dark:bg-opacity-80 transition-all duration-700 ease-in-out"
  >
    <NuxtLink
      v-for="item in navbars"
      :key="item.name"
      :to="item.href"
      :title="item.name"
      class="font-bold truncate capitalize dark:text-slate-300 text-gray-500 dark:hover:text-slate-400 hover:text-gray-900 md:px-6 px-3 md:py-4 py-2 flex justify-evenly transition-all duration-700"
      :class="{ active: item.current }"
      :aria-label="item.name"
      no-rel
    >
      <Icon
        class="dark:text-dark-4 dark:hover:text-casetrue-1 w-7 h-7 transition-all duration-700"
        :name="item.icon"
      />
    </NuxtLink>
    <button
      @click="openModal = true"
      class="hidden justify-evenly font-bold truncate capitalize dark:text-slate-300 text-gray-500 dark:hover:text-slate-400 hover:text-gray-900 md:px-6 px-4 md:py-4 py-2 transition-all duration-700"
    >
      <Icon
        name="carbon:settings"
        class="dark:text-dark-4 dark:hover:text-casetrue-1 w-7 h-7 transition-all duration-700"
      />
    </button>
  </nav>
  <transition
    enter-active-class="transition ease-out duration-700 translate-x-2/3"
    enter-to-class="transform opacity-100 translate-x-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="transform opacity-100"
    leave-to-class="transform opacity-0 translate-x-2/3"
  >
    <Settings v-if="openModal" @close-button="() => (openModal = false)" />
  </transition>
</template>

<script setup>
const openModal = ref(false);
const { navbars } = await $fetch("/api/navbars");

if (!navbars) {
  throw createError({
    statusCode: 404,
    statusMessage: "NavBar Data not found",
    fatal: true,
  });
}
</script>
