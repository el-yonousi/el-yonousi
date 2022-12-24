<template>
  <div
    id="experience"
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
          <span v-text="'back to experiences'" class="font-bold uppercase" />
        </button>
      </div>
      <div class="flex md:flex-row flex-col gap-4 p-4">
        <div
          class="flex-[30%] md:h-fit p-4 flex justify-center items-center rounded border border-dark-2 shadow-md"
        >
          <img
            class="rounded w-full h-full object-cover"
            :src="experience.profile"
            :alt="experience.company_name"
          />
        </div>
        <div class="flex-[70%] flex flex-col gap-1 p-4 rounded border border-dark-1 mt-3">
          <h1
            class="font-bold text-2xl uppercase select-none"
            v-text="experience.company_name"
          />
          <h3
            class="mb-[3px] inline-block text-xl text-dark-4 capitalize select-none"
            v-text="experience.title"
          />
          <p
            class="text-dark-4 truncate select-none text-lg"
            v-text="experience.employment_type"
          />
          <p class="text-gray-400 select-none text-lg" v-html="experience.description" />
          <p class="uppercase select-none text-lg">
            <span v-text="`${experience.date_start}-${experience.date_end}&nbsp;`"></span>
            <span
              v-if="experience.date_diff !== ''"
              v-text="`(${experience.date_diff})`"
            />
          </p>
          <NuxtLink
            :to="experience.company_url"
            class="break-all mt-3 text-casetrue-1 hover:text-casetrue-2 font-bold mb-[3px] inline-block select-none w-fit transition-all duration-300 ease-in-out"
            target="_blank"
          >
            {{ experience.company_url }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { experience } = defineProps({
  experience: Object,
});
</script>