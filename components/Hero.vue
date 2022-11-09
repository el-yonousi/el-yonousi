<template>
  <section
    class=" flex flex-row-reverse flex-wrap md:bg-[url('/img/banner.png')] bg-[url('/img/mobile-banner.png')] bg-no-repeat md:bg-right-bottom bg-cover h-screen custom-class-nav-scroll"
    id="home">
    <div
      class="dark:bg-opacity-50 z-10 pb-8 dark:bg-dark-1 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl sm:text-6xl md:text-8xl font-bold dark:text-casetrue text-gray-900">
            <span class="block xl:inline">Mohamed EL YONOUSI</span>
            {{ " " }}
            <span class="block dark:text-casetrue-2 text-indigo-600 xl:inline capitalize">
              web developer</span>
          </h1>
          <p
            class="mt-3 text-base dark:text-dark-4 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Create full stack web development from scratch, repair old websites, and
            Add a new twist to ancient sites.
          </p>
        </div>
      </main>
    </div>
    <div class="basis-[50%] hidden">
      <img
        class="h-56 w-full object-cover object-center rounded-md md:rounded-tr-none sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/img/banner.png" alt="el-yonousi-header" />
    </div>
  </section>
</template>

<style scoped>
img {
  transform: scale(1px);
}
</style>