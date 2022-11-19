<template>
  <container class="px-4 sm:px-6 w-full" id="projects">
    <heading classes="text-center">
      <span v-text="'my projects'" />
    </heading>
    <div class="flex flex-col gap-10">
      <div
        v-for="(project, index) in projects"
        :key="project.name + '-' + index"
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
                <span v-text="`&quot;${project.name}&quot;,`" />
              </p>
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;date&quot;:&nbsp;`"
                />
                <span v-text="`&quot;${project.date}&quot;,`" />
              </p>
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;description&quot;:&nbsp;`"
                />
                <span
                  class="text-ellipsis"
                  v-text="`&quot;${project.description}&quot;,`"
                />
              </p>
              <p class="px-3">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;tools&quot;:&nbsp;`"
                />
                <span v-text="'&#91;'" />
                <span
                  v-for="(tool, index_tool) in project.topics"
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
                  :href="project.clone_url"
                  class="underline underline-offset-4 break-all decoration-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-text="`&quot;${project.clone_url}&quot;`"
                  :aria-label="project.clone_ur"
                />
              </p>
              <p class="px-3" v-if="project.homepage">
                <span
                  class="text-casetrue font-bold"
                  v-text="`&quot;homepage&quot;:&nbsp;`"
                />
                <a
                  :href="project.homepage"
                  class="underline underline-offset-4 break-all decoration-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-text="`&quot;${project.homepage}&quot;`"
                  :aria-label="project.homepage"
                />
              </p>
            </div>
            <span v-text="`&#125;`" />
          </code>
        </div>
        <div class="md:flex-[45%] flex items-center md:justify-center"></div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { projects } = await $fetch("/api/projects");
</script>
