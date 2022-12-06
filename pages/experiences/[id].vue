<template>
  <container class="px-4 sm:px-6 w-full min-h-screen">
    <heading />
    <NuxtLink
      to="/#experiences"
      class="uppercase flex items-center hover:animate-pulse"
      no-rel
    >
      <Icon name="line-md:chevron-left" class="w-8 h-8" />
      <span v-text="'back to experiences'" />
    </NuxtLink>
    <heading />
    <div class="flex md:flex-row flex-col gap-4 p-4">
      <div
        class="flex-[40%] p-4 flex justify-center items-center rounded border border-dark-2 shadow-md"
      >
        <img
          class="rounded w-full h-full object-cover"
          :src="experience.profile"
          alt=""
        />
      </div>
      <div class="flex-[60%] flex flex-col gap-1 p-4 rounded border border-dark-1 mt-3">
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
            v-if="getDiff(experience.date_start, experience.date_end) !== ''"
            v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
          />
        </p>
        <NuxtLink
          :to="experience.company_url"
          class="mt-3 text-casetrue-1 hover:text-casetrue-2 font-bold mb-[3px] inline-block select-none w-fit transition-all duration-300 ease-in-out"
          target="_blank"
        >
          {{ experience.company_url }}
        </NuxtLink>
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
