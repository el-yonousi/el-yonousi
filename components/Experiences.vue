<template>
  <container
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-anchor="#experiences"
    class="px-4 sm:px-6 w-full custom-class-nav-scroll"
    id="experiences"
  >
    <heading classes="text-center">
      <span v-text="'experiences'" />
    </heading>
    <div class="md:px-4 flex flex-col gap-4 md:w-1/2 w-full mb-4">
      <h3 class="text-2xl dark:text-dark-4 font-bold capitalize">professional side</h3>
      <p class="text-xl">
        Professional experiences that allowed me to build my career by developing my
        personal and technical skills professionally.
      </p>
    </div>
    <ClientOnly>
      <Carousel
        v-if="experiences != []"
        :id="'experiences-wraper'"
        :classes="'!auto-cols-max'"
      >
        <template #carousel-data>
          <div
            v-for="experience in experiences"
            :key="experience.id"
            class="group flex md:flex-row flex-col hover:shadow-casetrue border border-casetrue-1 overflow-hidden rounded-md snap-start transition-all duration-700 ease-in-out"
          >
            <img
              class="md:w-52 h-52 object-cover"
              :src="experience.profile"
              :alt="experience.company_name"
              draggable="false"
              loading="lazy"
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
                  <span
                    v-text="`${experience.date_start}-${experience.date_end}&nbsp;`"
                  />
                  <span
                    v-if="getDiff(experience.date_start, experience.date_end) !== ''"
                    v-text="`(${getDiff(experience.date_start, experience.date_end)})`"
                  />
                </p>
              </div>
              <p
                class="text-casetrue-1 max-w-sm select-none cursor-pointer flex justify-end"
              >
                <span
                  @click="openExperience(experience)"
                  class="flex items-center text-end uppercase hover:text-casetrue-1"
                  draggable="false"
                >
                  <span v-text="'learn more'"></span>
                  <Icon
                    name="line-md:chevron-right"
                    class="group-hover:opacity-100 md:opacity-0 transition-all duration-300 ease-in-out"
                  />
                </span>
              </p>
            </div>
          </div>
        </template>
      </Carousel>
    </ClientOnly>
  </container>
  <transition
    enter-active-class="transition ease-out duration-700 translate-x-2/3"
    enter-to-class="transform opacity-100 translate-x-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="transform opacity-100"
    leave-to-class="transform opacity-0 translate-x-2/3"
  >
    <Experience
      v-if="openModal"
      @close-button="() => (openModal = false)"
      :experience="experience"
    />
  </transition>
</template>

<script setup>
const openModal = ref(false);
const experience = ref();
const openExperience = (exprce) => {
  openModal.value = true;
  experience.value = exprce;
  experience.value["date_diff"] = getDiff(exprce.date_start, exprce.date_end);
};

const { data: experiences } = await useFetch("/api/experiences/experiences");

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

watchEffect(() => {
  useHead({
    htmlAttrs: {
      class: openModal.value ? "overflow-hidden" : "",
    },
  });
});
</script>
