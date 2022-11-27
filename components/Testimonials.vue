<template>
  <container class="px-4 sm:px-6 w-full custom-class-nav-scroll" id="testimonials">
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
            <nuxt-img
              class="w-full h-52 object-cover"
              :src="testimonial.profile"
              :alt="testimonial.fullName"
              sizes="100vw md:50vw lg:400px"
              draggable="false"
              loading="lazy"
              fit="cover"
              format="webp"
            />
            <div class="p-4 flex flex-col justify-between gap-1">
              <div class="flex flex-col gap-1">
                <p
                  class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none"
                  v-text="testimonial.fullName"
                />
                <p
                  class="text-gray-300 truncate select-none"
                  :title="testimonial.status"
                  v-text="testimonial.status"
                />
                <p
                  class="text-gray-400 max-h-[100px] line-clamp-3 select-none"
                  :title="testimonial.recommendation"
                  v-html="testimonial.recommendation"
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
    </ClientOnly>
  </container>
</template>

<script setup>
const { data: testimonials } = await useFetch("/api/testimonials");
</script>
