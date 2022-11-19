<template>
  <container class="px-4 sm:px-6 w-full custom-class-nav-scroll" id="experiences">
    <heading classes="text-center">
      <span v-text="'my experiences'" />
    </heading>
    <Carousel :id="'experiences-wraper'" :classes="'!auto-cols-max'">
      <template #carousel-data>
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="flex md:flex-row flex-col drop-shadow-sm shadow-sm shadow-dark-3 overflow-hidden rounded-md snap-start lg:grayscale-[100%] hover:grayscale-0 transition-all duration-[0.3s] ease-in-out"
        >
          <img
            class="md:w-52 h-52 object-cover"
            :src="experience.profile"
            :alt="experience.company_name"
            draggable="false"
          />
          <div class="p-4 flex flex-col justify-between gap-1 group">
            <div class="flex flex-col gap-1">
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

              <p class="uppercase select-none">
                <span v-text="`${experience.date_start}-${experience.date_end}&nbsp;`" />
                <span
                  v-if="getDiff(experience.date_start, experience.date_end) !== ''"
                  v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
                />
              </p>
            </div>
            <p class="text-casetrue max-w-sm select-none cursor-pointer">
              <button
                @click="getExperience(experience)"
                aria-label="learn more.."
                class="flex justify-between text-right items-center w-full"
              >
                <span v-text="'learn more'" class="uppercase" />
                <Icon
                  name="material-symbols:arrow-circle-right-outline-rounded"
                  class="w-6 h-6 group-hover:animate-ping"
                />
              </button>
            </p>
          </div>
        </div>
      </template>
    </Carousel>
    <modal v-if="openModal" @close-button="() => (openModal = false)">
      <template #component>
        <Experience :experience="setExperience" />
      </template>
      <template #cancel>
        <button aria-label="cancel"></button>
      </template>
      <template #submit>
        <button aria-label="submit"></button>
      </template>
    </modal>
  </container>
</template>

<script setup>
const openModal = ref(false);
const setExperience = ref();

const { experiences } = await $fetch("/api/experiences");

const getExperience = (exper) => {
  open.value = true;
  openModal.value = true;
  setExperience.value = exper;
  setExperience.value["duration"] = getDiff(exper.date_start, exper.date_end);
};

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