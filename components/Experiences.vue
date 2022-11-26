<template>
  <container
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="px-4 sm:px-6 w-full custom-class-nav-scroll"
    id="experiences"
  >
    <heading classes="text-center">
      <span v-text="'my experiences'" />
    </heading>
    <div v-if="experiences.length == 0">loading..</div>
    <Carousel v-else :id="'experiences-wraper'" :classes="'!auto-cols-max'">
      <template #carousel-data>
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="group flex md:flex-row flex-col drop-shadow-sm shadow-sm shadow-dark-3 overflow-hidden rounded-md snap-start lg:grayscale-[100%] hover:grayscale-0 transition-all duration-700 ease-in-out"
        >
          <nuxt-img
            class="md:w-52 h-52 object-cover"
            :src="experience.profile"
            :alt="experience.company_name"
            sizes="100vw md:50vw lg:400px"
            draggable="false"
            loading="lazy"
            fit="cover"
            format="webp"
          />
          <div class="p-4 flex flex-col justify-between gap-1">
            <div class="group flex flex-col gap-1">
              <p
                class="title font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none hover:text-gray-400"
                v-text="experience.title"
                :title="experience.title"
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

              <p class="uppercase select-none">
                <span v-text="`${experience.date_start}-${experience.date_end}&nbsp;`" />
                <span
                  v-if="getDiff(experience.date_start, experience.date_end) !== ''"
                  v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
                />
              </p>
            </div>
            <p class="text-casetrue max-w-sm select-none cursor-pointer flex justify-end">
              <NuxtLink
                :to="`/experiences/${experience.id}`"
                aria-label="learn more.."
                class="flex items-center text-end uppercase"
              >
                <span v-text="'learn more'"></span>
                <Icon
                  name="line-md:chevron-right"
                  class="group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out"
                />
              </NuxtLink>
            </p>
          </div>
        </div>
      </template>
    </Carousel>
  </container>
</template>

<script setup>
const { data: experiences, pending } = await useFetch("/api/experiences/experiences");

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
