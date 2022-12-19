<template>
  <container
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="px-4 sm:px-6 w-full"
    id="projects"
  >
    <heading classes="text-center">
      <span v-text="'projects'" />
    </heading>
    <div class="md:px-4 flex flex-col gap-4 md:w-1/2 w-full mb-4">
      <h3 class="text-2xl dark:text-dark-4 font-bold capitalize">featured projects</h3>
      <p class="text-xl">
        Created as a part of the learning process, the goal was to build modern,
        responsive, and useful web applications.
      </p>
    </div>
    <ClientOnly>
      <Carousel
        v-if="projects != []"
        :id="'projects-wraper'"
        :classes="'md:!auto-cols-max'"
      >
        <template #carousel-data>
          <div
            v-for="(project, index) in projects"
            :key="project.name + '-' + index"
            class="overflow-hidden rounded-md snap-start"
          >
            <fieldset
              class="border hover:border-casetrue-2 border-casetrue-1 rounded-md h-full p-2 transition-all duration-300 ease-in-out"
            >
              <legend class="w-full flex justify-between items-center px-2">
                <span v-text="project.name" class="uppercase" />
                <div class="flex justify-between items-center gap-2">
                  <NuxtLink
                    v-if="project.homepage"
                    aria-label="linkedin"
                    :to="project.homepage"
                    target="_blank"
                    class="border border-dark-4 dark:hover:border-casetrue-1 rounded px-1 py-[0.5px]"
                  >
                    live preview
                  </NuxtLink>
                  <NuxtLink
                    v-if="project.clone_url"
                    aria-label="linkedin"
                    :to="project.clone_url"
                    target="_blank"
                    class="dark:hover:text-casetrue-2"
                  >
                    <Icon
                      name="jam:github"
                      class="w-8 h-8 text-dark-5 dark:hover:text-casetrue-1 transition-all duration-300 ease-in-out"
                    />
                  </NuxtLink>
                </div>
              </legend>
              <img
                class="w-full h-60 object-cover rounded-md"
                :src="project.preview"
                :alt="project.name"
                draggable="false"
                loading="lazy"
              />
            </fieldset>
          </div>
        </template>
      </Carousel>
    </ClientOnly>
  </container>
</template>

<script setup>
const { data: projects } = await useFetch("/api/projects");
</script>
