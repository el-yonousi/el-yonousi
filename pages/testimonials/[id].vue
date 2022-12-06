<template>
  <container class="px-4 sm:px-6 w-full min-h-screen">
    <heading />
    <NuxtLink
      to="/#testimonials"
      class="uppercase flex items-center hover:animate-pulse"
      no-rel
    >
      <Icon name="line-md:chevron-left" class="w-8 h-8" />
      <span v-text="'back to testimonials'" />
    </NuxtLink>
    <heading />
    <div class="flex md:flex-row flex-col gap-4 p-4">
      <div
        class="flex-[40%] p-4 flex justify-center items-center rounded border border-dark-2 shadow-md"
      >
        <img class="rounded w-full h-full object-cover" :src="testimonial.profile" alt="" />
      </div>
      <div class="flex-[60%]">
        <div class="flex flex-col gap-2 p-4 rounded border border-dark-1 mt-3">
          <h1
            class="mb-[3px] font-bold text-2xl text-dark-4 capitalize select-none"
            v-text="testimonial.fullName"
          />
          <p
            class="text-dark-4 truncate select-none text-lg"
            v-text="testimonial.employment_type"
          />
          <p
            class="text-gray-300 truncate select-none text-lg"
            :title="testimonial.status"
            v-text="testimonial.status"
          />
          <p
            class="text-gray-400 select-none text-lg"
            v-html="testimonial.recommendation"
          />
          <p class="uppercase select-none text-lg">
            <span v-text="testimonial.relationship"></span>
          </p>
          <NuxtLink
            :to="testimonial.linkedin"
            class="text-casetrue-1 hover:text-casetrue-2 font-bold select-none w-fit transition-all duration-300 ease-in-out"
            target="_blank"
          >
           linkedin
          </NuxtLink>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { id } = useRoute().params;
const { data: testimonial } = await useFetch("/api/testimonials/" + id);

definePageMeta({
  layout: "item",
});

useHead({
  title: `${testimonial.value.fullName} (${testimonial.value.relationship})`,
});
</script>
