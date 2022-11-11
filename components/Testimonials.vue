<template>
  <container class="px-4 sm:px-6 w-full custom-class-nav-scroll" id="testimonials">
    <heading classes="text-center">
      <span v-text="'What My Friends and teachers Say'" />
    </heading>
    <Carousel :id="'testimonials-wraper'">
      <template #carousel-data>
        <div
          v-for="(testimonial, index) in data"
          :key="testimonial.fullName + '-' + index"
          class="drop-shadow-sm shadow-sm shadow-dark-3 overflow-hidden rounded-md snap-start lg:grayscale-[100%] hover:grayscale-0 transition-all duration-[0.3s] ease-in-out"
        >
          <img
            class="w-full h-52 object-cover"
            :src="testimonial.profile"
            :alt="testimonial.fullName"
            draggable="false"
          />
          <div class="p-4 flex flex-col justify-between gap-1">
            <div class="flex flex-col gap-1">
              <a
                draggable="false"
                :href="testimonial.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3
                  class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none hover:text-gray-400"
                  v-text="testimonial.fullName"
                />
              </a>
              <p
                class="text-gray-300 truncate select-none"
                :title="testimonial.status"
                v-text="testimonial.status"
              />
              <p
                class="text-gray-400 max-h-[100px] line-clamp-3 select-none"
                :title="testimonial.recommendation"
                v-text="testimonial.recommendation"
              />
            </div>
            <p
              class="p-1 uppercase text-casetrue select-none"
              v-text="testimonial.relationship"
            />
          </div>
        </div>
      </template>
    </Carousel>
  </container>
</template>

<script setup>
const { data } = await useAsyncData("testimonials", () => $fetch("/api/testimonials"));
</script>
