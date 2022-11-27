<template>
  <container class="px-4 sm:px-6 w-full">
    <heading />
    <NuxtLink to="/#experiences" class="uppercase flex items-center" no-rel>
      <Icon name="line-md:chevron-left" class="w-8 h-8" />
      <span v-text="'back to experiences'" />
    </NuxtLink>
    <heading />
    <div class="flex gap-4">
      <div
        class="flex-[30%] rounded border border-dark-4 flex justify-center items-center"
      >
        <img class="rounded" :src="experience.profile" alt="" />
      </div>
      <div class="flex-[70%]">
        <div class="flex flex-col gap-1 p-4 rounded border border-dark-1 mt-3">
          <h3
            class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none"
            v-text="experience.title"
          />
          <p
            class="text-gray-300 truncate select-none"
            v-text="experience.employment_type"
          />
          <p class="text-casetrue-1 font-semibold hover:text-casetrue-2 select-none">
            <NuxtLink
              :aria-label="experience.company_name"
              target="_blank"
              :to="experience.company_url"
            >
            </NuxtLink>
          </p>
          <p class="text-gray-400 select-none" v-html="experience.description" />
          <p class="uppercase select-none">
            <span v-text="`${experience.date_start}-${experience.date_end}&nbsp;`"></span>
            <span
              v-if="getDiff(experience.date_start, experience.date_end) !== ''"
              v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
            />
            <!-- <span v-if="experience.duration !== ''" v-text="`(${experience.duration})`" /> -->
          </p>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { id } = useRoute().params;
const { data: experience } = await useFetch("/api/experiences/" + id);
definePageMeta({
  layout: "item",
});

useHead({
  title: `${experience.value.company_name} (${experience.value.title})`,
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
