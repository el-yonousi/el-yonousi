<template>
  <container
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="px-4 sm:px-6"
    id="whatcando"
  >
    <div class="flex md:flex-nowrap flex-wrap gap-6">
      <div class="flex-[50%]">
        <heading>
          <span v-text="'What can i do?'" />
        </heading>
        <p class="text-xl text-dark-4">
          Create full stack web development from scratch, repair old websites, and Add a
          new twist to ancient sites.
        </p>
      </div>
      <div class="flex-[50%] flex flex-col gap-6">
        <div
          v-for="(what, index) in what_can_do"
          :key="index + '-' + what"
          class="flex items-center justify-center gap-6"
        >
          <div>
            <Icon
              :name="what.icon"
              class="text-dark-5 w-16 h-16 dark:bg-casetrue-1 rounded-full p-3"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="3000" class="flex flex-col gap-2">
            <p class="text-xl font-bold dark:text-casetrue-1">{{ what.title }}</p>
            <p class="text-lg text-dark-4">{{ what.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { what_can_do } = await $fetch("/api/what_can_do");
</script>
