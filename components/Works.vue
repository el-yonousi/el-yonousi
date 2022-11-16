<template>
  <container class="px-4 sm:px-6 w-full custom-class-nav-scroll" id="works">
    <heading classes="text-center">
      <span v-text="'my projects'" />
    </heading>
    <div class="flex flex-col gap-10">
      <div
        v-for="(work, index) in projects"
        :key="work.date + '-' + index"
        class="flex md:flex-nowrap flex-wrap md:gap-3 gap-6"
        :class="index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
      >
        <div class="md:flex-[45%] md:w-full flex justify-center items-center shadow-2xl">
          <code class="md:text-lg text-base p-4">
            <span v-text="`&#123;`" />
            <div class="flex flex-col gap-[1px]">
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;name&quot;:&nbsp;`"
                />
                <span v-text="`&quot;${work.name}&quot;,`" />
              </p>
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;date&quot;:&nbsp;`"
                />
                <span v-text="`&quot;${work.date}&quot;,`" />
              </p>
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;description&quot;:&nbsp;`"
                />
                <span class="text-ellipsis" v-text="`&quot;${work.description}&quot;,`" />
              </p>
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;tools&quot;:&nbsp;`"
                />
                <span v-text="'&#91;'" />
                <span
                  v-for="(tool, index_tool) in work.topics"
                  :key="tool + '-' + index_tool"
                >
                  <span v-text="index_tool == 0 ? '' : ', '" />
                  <Icon class="w-5 h-5" :name="`vscode-icons:file-type-${tool}`" />
                </span>
                <span v-text="`&#93;,`" />
              </p>
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;github&quot;:&nbsp;`"
                />
                <a
                  :href="work.link"
                  class="underline underline-offset-4 break-all decoration-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-text="`&quot;${work.clone_url}&quot;`"
                />
              </p>
              <p class="px-3" v-if="work.homepage">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;homepage&quot;:&nbsp;`"
                />
                <a
                  :href="work.link"
                  class="underline underline-offset-4 break-all decoration-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-text="`&quot;${work.homepage}&quot;`"
                />
              </p>
            </div>
            <span v-text="`&#125;`" />
          </code>
        </div>
        <div class="md:flex-[45%] flex items-center md:justify-center">
          <img
            class="w-[85%] md:max-h-[400px] max-h-[250px] object-cover rounded"
            :src="work.cover"
            :alt="work.title"
          />
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { projects } = await $fetch("/api/projects");
</script>
