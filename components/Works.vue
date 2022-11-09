<template>
  <container class="px-4 sm:px-6 custom-class-nav-scroll" id="works">
    <heading :text="'works'" :classes="'text-center !text-5xl'" />
    <div>
      <div
        v-for="(work, index) in data"
        :key="work.date + '-' + index"
        class="mb-10 ml-4 flex md:gap-3 md:static relative"
        :class="index % 2 == 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'"
      >
        <div
          class="md:flex-[45%] md:w-full w-[90%] inline-flex flex-col gap-6"
          :class="index % 2 == 0 ? 'md:mt-0 mt-12' : 'md:mt-auto mt-12'"
        >
          <h3
            class="md:text-3xl text-xl font-bold dark:text-casetrue-2 text-gray-900 capitalize"
            v-text="work.title"
          />
          <p
            class="md:text-xl text-lg font-normal dark:text-dark-4 text-gray-500"
            v-text="work.description"
          ></p>
          <div class="flex gap-1">
            <kbd
              v-for="(tool, index_tool) in work.tools"
              :key="tool + '-' + index_tool"
              class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-700 dark:text-dark-4 dark:border-gray-600"
              v-text="tool"
            ></kbd>
          </div>
          <a
            :href="work.link"
            target="_blank"
            rel="noopener noreferrer"
            class="button-effect flex w-fit justify-between items-center gap-4 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 transition-all duration-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-dark-4 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
            <span v-text="'see project'" class="capitalize"/>
            <Icon name="fluent:eye-show-24-filled" class="w-5 h-5 p-0 m-0"/>
          </a>
        </div>
        <div
          class="flex-[10%] md:w-full w-[10%] md:h-auto h-full md:static absolute right-0 flex flex-col items-center justify-center"
        >
          <time
            class="md:text-xl text-lg font-bold dark:text-dark-4 text-slate-300 text-center"
            v-text="work.date"
          ></time>
          <div class="w-6 h-6 rounded-full border-2 border-casetrue mt-3"></div>
          <div class="w-[2px] h-full bg-casetrue"></div>
        </div>
        <div class="md:flex-[45%] flex items-center justify-center md:mt-12">
          <img
            class="w-[85%] md:max-h-[400px] max-h-[250px] object-cover rounded transition-all ease-in-out duration-700"
            :class="
              index % 2 == 0
                ? 'rounded-tl-[90%] hover:rounded-tl hover:rounded-br-[90%]'
                : 'md:rounded-br-[90%] hover:rounded-br hover:rounded-tl-[90%]  md:rounded-tl rounded-tl-[90%]'
            "
            :src="work.cover"
            :alt="work.title"
          />
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { data } = await useAsyncData("works", () => $fetch("/api/works"));
</script>
