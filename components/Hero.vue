<template>
  <section
    class="md:fade-t flex justify-center items-center bg-blend-multiply bg-dark-2 bg-no-repeat bg-cover w-full h-screen custom-class-nav-scroll"
    id="home"
    :style="{ backgroundImage: `url('${img_banner}')` }"
  >
    <container class="z-10 flex flex-col gap-4 px-4 sm:px-6">
      <Heading classes="flex flex-col gap-4 !text-4xl md:!text-5xl lg:!text-7xl mb-0">
        <p class="dark:text-dark-4">Hello,</p>
        <p class="dark:text-dark-4">
          I am <span class="dark:text-casetrue">Mohamed</span>
        </p>
        <p class="dark:text-dark-4 capitalize">full stack developer</p>
      </Heading>
      <p class="text-base sm:text-lg dark:text-dark-4 md:text-xl lg:mx-0">
        Create full-stack web development from scratch, repair old websites, and add a new
        <span class="dark:text-casetrue">twist</span> to ancient sites.
      </p>
    </container>
    <NuxtLink
      to="#whatcando"
      no-rel
      aria-label="scroll down"
      class="absolute bottom-10 animate-bounce md:block hidden"
    >
      <Icon name="line-md:chevron-triple-down" class="w-10 h-10 dark:text-dark-3" />
    </NuxtLink>
  </section>
</template>

<script setup>
// const { vid_banner } = await $fetch("/api/banner/vid_banner");
const { img_banner } = await $fetch("/api/banner/img_banner");
</script>
