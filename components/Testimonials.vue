<template>
  <container
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="px-4 sm:px-6 w-full custom-class-nav-scroll"
    id="testimonials"
  >
    <heading classes="text-center capitalize">
      <span v-text="'what my relationships say'" />
    </heading>
    <div class="md:px-4 flex flex-col gap-4 md:w-1/2 w-full mb-4">
      <h3 class="text-2xl dark:text-dark-4 font-bold capitalize">recommendations</h3>
      <p class="text-xl">
        a couple of recommendations from teachers, mentors, colleagues, and supervisors.
      </p>
    </div>
    <ClientOnly>
      <Carousel v-if="testimonials != []" :id="'testimonials-wraper'">
        <template #carousel-data>
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.fullName + '-' + index"
            class="hover:shadow-casetrue border border-casetrue-1 overflow-hidden rounded-md snap-start transition-all duration-[0.3s] ease-in-out"
          >
            <img
              class="w-full h-52 object-cover"
              :src="testimonial.profile"
              :alt="testimonial.fullName"
              draggable="false"
              loading="lazy"
            />
            <div class="p-4 flex flex-col justify-between gap-1">
              <div class="flex flex-col gap-1">
                <div class="flex justify-between items-center gap-2">
                  <p
                    class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none"
                    v-text="testimonial.fullName"
                  />
                  <span
                    @click="openTestimonial(testimonial)"
                    draggable="false"
                    class="p-0 m-0 leading-none"
                  >
                    <Icon
                      name="ic:baseline-remove-red-eye"
                      class="h-5 w-5 group-hover:text-casetrue-1"
                    />
                  </span>
                </div>
                <p
                  class="text-gray-300 truncate select-none"
                  :title="testimonial.status"
                  v-text="testimonial.status"
                />
                <p
                  class="text-gray-400 max-h-[100px] line-clamp-2 select-none"
                  :title="testimonial.recommendation"
                  v-html="testimonial.recommendation"
                />
              </div>
              <p
                class="py-1 uppercase text-casetrue-1 select-none self-start"
                v-text="testimonial.relationship"
              />
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
    <Testimonial
      v-if="openModal"
      @close-button="() => (openModal = false)"
      :testimonial="testimonial"
    />
  </transition>
</template>

<script setup>
const openModal = ref(false);
const testimonial = ref();
if (process.client) {
  if (openModal.value == true) {
    document.documentElement.style.overflow = "hidden";
  }
}
const openTestimonial = (tstmnl) => {
  openModal.value = true;
  testimonial.value = tstmnl;
};

const { data: testimonials } = await useFetch("/api/testimonials/testimonials");

watchEffect(() => {
  useHead({
    htmlAttrs: {
      class: openModal.value ? "overflow-hidden" : "",
    },
  });
});
</script>
