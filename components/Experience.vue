<template>
  <div class="flex flex-col gap-1 p-4 rounded border border-dark-1 mt-3">
    <h3
      class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none"
      v-text="experience.title"
    />
    <p class="text-gray-300 truncate select-none" v-text="experience.employment_type" />
    <p class="text-casetrue font-semibold hover:text-casetrue-2 select-none">
      <NuxtLink
        :aria-label="experience.company_name"
        target="_blank"
        :to="experience.company_url"
      >
        {{ experience.company_name }}
      </NuxtLink>
    </p>
    <p class="text-gray-400 select-none" v-html="experience.description" />
    <p class="uppercase select-none">
      <span v-text="`${experience.date_start}-${experience.date_end}&nbsp;`"></span>
      <span v-if="experience.duration !== ''" v-text="`(${experience.duration})`" />
    </p>
  </div>
</template>

<script setup>
const { experience } = defineProps({
  experience: Object,
});

if (!experience) {
  throw createError({
    statusCode: 404,
    statusMessage: "Experience is empty",
    fatal: true,
  });
}
</script>

<style scoped></style>
