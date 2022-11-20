<template>
  <container class="px-4 sm:px-6 w-full" id="projects">
    <heading classes="text-center">
      <span v-text="'my projects'" />
    </heading>
    <Carousel :id="'projects-wraper'" :classes="'md:!auto-cols-max'">
      <template #carousel-data>
        <div
          v-for="(project, index) in projects"
          :key="project.name + '-' + index"
          class="overflow-hidden rounded-md snap-start"
        >
          <fieldset class="border border-dark-3 rounded-md h-full p-2">
            <legend class="w-full flex justify-between items-center px-2">
              <span v-text="project.name" class="uppercase" />
              <div class="flex justify-between items-center gap-2">
                <a
                  v-if="project.homepage"
                  aria-label="linkedin"
                  :href="project.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-text="'live preview'"
                  class="border border-dark-4 dark:hover:border-casetrue rounded px-1 py-[0.5px]"
                />
                <a
                  v-if="project.clone_url"
                  aria-label="linkedin"
                  :href="project.clone_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="dark:hover:text-casetrue-2"
                >
                  <Icon
                    name="jam:github"
                    class="w-8 h-8 text-dark-5 dark:hover:text-casetrue transition-all duration-300 ease-in-out"
                  />
                </a>
              </div>
            </legend>
            <nuxt-img
              class="w-full h-60 object-cover rounded-md"
              :src="project.preview"
              :alt="project.name"
              sizes="100vw md:50vw lg:400px"
              draggable="false"
              loading="lazy"
              fit="cover"
              format="webp"
            />
          </fieldset>
        </div>
      </template>
    </Carousel>
  </container>
</template>

<script setup>
const { projects } = await $fetch("/api/projects");
</script>
