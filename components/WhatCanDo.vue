<template>
  <container class="px-4 sm:px-6" id="whatcando">
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
          v-for="(what, index) in data"
          :key="index + '-' + what"
          class="flex items-center justify-center gap-6"
        >
          <div>
            <Icon
              :name="what.icon"
              class="text-dark-5 w-16 h-16 dark:bg-casetrue rounded-full p-3"
            />
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-xl font-bold text-casetrue">{{ what.title }}</p>
            <p class="text-lg text-dark-4">{{ what.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { data } = await useAsyncData("whatCanDo", () => $fetch("/api/whatCanDo"));
</script>
