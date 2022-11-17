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
          <div class="p-4 flex flex-col justify-between gap-1">
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
              <!-- <p
                class="text-gray-400 max-w-sm select-none"
                :title="experience.description"
                v-html="experience.description"
              /> -->
              <p class="uppercase select-none">
                <span
                  v-text="`${experience.date_start}-${experience.date_end}&nbsp;`"
                ></span>
                <span
                  v-if="getDiff(experience.date_start, experience.date_end) !== ''"
                  v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
                ></span>
              </p>
            </div>
            <p class="text-casetrue max-w-sm select-none cursor-pointer">
              <button @click="getExperience(experience)">learn more..</button>
            </p>
          </div>
        </div>
      </template>
    </Carousel>
    <modal>
      <template #component>
        <Experience :experience="setExperience" />
      </template>
      <template #cancel>
        <button></button>
      </template>
      <template #submit>
        <button></button>
      </template>
    </modal>
  </container>
</template>

<script setup>
const open = useOpen();
const setExperience = ref();

const { experiences } = await $fetch("/api/experiences");

const getExperience = (exper) => {
  open.value = true;
  setExperience.value = exper;
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
