<template>
  <div
    id="settings"
    @click.self="$emit('closeButton')"
    class="fixed w-full h-full top-0 right-0 z-50 dark:bg-opacity-80 flex justify-end items-center"
  >
    <!-- <div class="md:flex dark:bg-red-500 w-fit h-full"></div> -->
    <div
      class="z-[51] border-casetrue-1 shadow-casetrue flex flex-col overflow-x-auto md:w-11/12 lg:w-4/5 w-full h-full gap-4 dark:bg-dark-1 rounded"
    >
      <div
        class="sticky top-0 p-4 w-full text-left dark:bg-dark-1 shadow-sm hover:animate-pulse"
      >
        <button
          aria-label="close"
          @click="$emit('closeButton')"
          class="outline-none flex items-center justify-center leading-none"
        >
          <Icon
            name="line-md:chevron-left"
            class="w-8 h-8 dark:text-casetrue-1 dark:hover:text-casetrue-2"
          />
          <span v-text="'back to home'" class="font-bold uppercase" />
        </button>
      </div>
      <div class="flex flex-col gap-4 p-4">
        <div class="">
          <h2>configure language site</h2>
          <NuxtLink
            class="rtl:text-left text-right hover:bg-gray-900 hover:text-white rounded px-2 py-1 transition-all duration-300 ease-in-out"
            v-for="i18n in locales"
            :key="i18n.iso"
            :class="{
              'font-Cairo': i18n.code == 'ar',
              'font-Ubuntu': i18n.code != 'ar',
            }"
            :to="switchLocalePath(i18n.code)"
          >
            <span v-text="i18n.name" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locales, locale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>
