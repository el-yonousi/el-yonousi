<template>
  <div class="flex flex-col gap-1 p-4 rounded border border-dark-1 mt-3">
    <h3
      class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none hover:text-gray-400"
      v-text="experience.title"
    />
    <p
      class="text-gray-300 truncate select-none"
      :title="experience.employment_type"
      v-text="experience.employment_type"
    />
    <p
      class="text-gray-300 truncate select-none"
      :title="experience.company_name"
      v-text="experience.company_name"
    />
    <p
      class="text-gray-400 select-none"
      :title="experience.description"
      v-html="experience.description"
    />
    <p class="uppercase select-none">
      <span v-text="`${experience.date_start}-${experience.date_end}&nbsp;`"></span>
      <span
        v-if="getDiff(experience.date_start, experience.date_end) !== ''"
        v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
      ></span>
    </p>
  </div>
</template>

<script setup>
const { experience } = defineProps({
  experience: Object,
});

const getDiff = (start, end) => {
  const startDate = new Date(start);
  const endDate = end.toLowerCase() == "present" ? new Date() : new Date(end);
  const totalYear = endDate.getFullYear() - startDate.getFullYear();
  const totalMonth =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) -
    totalYear * 12;
  return (
    (totalYear == 0 ? "" : totalYear + " yrs, ") +
    (totalMonth == 0 ? "" : totalMonth + 1 + " mos")
  );
};
</script>

<style scoped></style>
