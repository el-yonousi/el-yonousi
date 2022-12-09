<template>
  <container
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="px-4 sm:px-6 w-full custom-class-nav-scroll"
    id="testimonials"
  >
    <heading classes="text-center">
      <span v-text="'What My Friends and teachers Say'" />
    </heading>
    <ClientOnly>
      <Carousel v-if="testimonials != []" :id="'testimonials-wraper'">
        <template #carousel-data>
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.fullName + '-' + index"
            class="drop-shadow-sm shadow-sm shadow-dark-3 overflow-hidden rounded-md snap-start lg:grayscale-[100%] hover:grayscale-0 transition-all duration-[0.3s] ease-in-out"
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
  <Testimonial
    v-if="openModal"
    @close-button="() => (openModal = false)"
    :testimonial="testimonial"
  />
</template>

<script setup>
const openModal = ref(false);
const testimonial = ref();
if (process.client) {
  if (openModal.value == true) {
    document.documentElement.style.overflow = 'hidden'
  }
}
const openTestimonial = (tstmnl) => {
  openModal.value = true;
  testimonial.value = tstmnl;
};

const { data: testimonials } = await useFetch("/api/testimonials/testimonials");
</script>
