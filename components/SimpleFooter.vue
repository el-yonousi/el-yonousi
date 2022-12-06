<template>
  <section id="simplefooter" class="dark:bg-dark-2 md:py-12 py-16">
    <div
      class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 dark:text-dark-4 font-semibold flex items-center gap-3 pt-6"
    >
      <NuxtLink aria-label="github" to="https://github.com/el-yonousi" target="_blank">
        <Icon name="mdi:github" class="w-10 h-10 text-dark-4 hover:text-dark-5" />
      </NuxtLink>
      <NuxtLink
        aria-label="linkedin"
        to="https://www.linkedin.com/in/elyonousi/"
        target="_blank"
      >
        <Icon name="mdi:linkedin" class="w-10 h-10 text-dark-4 hover:text-dark-5" />
      </NuxtLink>
      <div>
        Mohamed EL YONOUSI - ©
        <strong v-text="new Date().getFullYear()"></strong>
        All Rights Reserved
      </div>
    </div>
  </section>
</template>
