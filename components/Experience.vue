<template>
  <div class="flex flex-col gap-1 p-4 rounded border border-dark-1 mt-3">
    <h3
      class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none"
      v-text="experience.title"
    />
    <p class="text-gray-300 truncate select-none" v-text="experience.employment_type" />
    <p class="text-casetrue font-semibold hover:text-casetrue-2 select-none">
      <a
        :aria-label="experience.company_name"
        target="_blank"
        rel="noopener noreferrer"
        :href="experience.company_url"
        v-text="experience.company_name"
      />
    </p>
    <p class="text-gray-400 select-none" v-html="experience.description" />
    <p class="uppercase select-none">
      <span v-text="`${experience.date_start}-${experience.date_end}&nbsp;`"></span>
      <span
        v-if="getDiff(experience.date_start, experience.date_end) !== ''"
        v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
      />
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

const getDiff = (start, end) => {
  const startDate = new Date(start);
  const endDate = end.toLowerCase() == "present" ? new Date() : new Date(end);
  const totalYear = endDate.getFullYear() - startDate.getFullYear();
  const totalMonth =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) -
    totalYear * 12;
  return (
    (totalYear == 0 ? "" : totalYear + " years, ") +
    (totalMonth == 0 ? "" : totalMonth + 1 + " months")
  );
};
</script>

<style scoped></style>
