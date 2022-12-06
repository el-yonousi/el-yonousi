<template>
  <container
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="px-4 sm:px-6"
    id="mycontact"
  >
    <div class="flex flex-row flex-wrap gap-6">
      <div
        class="flex-[38%] w-full flex items-center gap-3 dark:bg-dark-2 rounded p-6"
        v-for="(item, index) in myContacts"
        :key="`${index}-${item.title}`"
      >
        <Icon :name="item.icon" class="w-8 h-8 text-casetrue-1" />
        <div class="flex flex-col gap-3">
          <div
            v-text="item.title"
            class="tracking-tight font-bold dark:text-casetrue-1 capitalize text-2xl"
          ></div>
          <NuxtLink
            class="text-xl text-casetrue-2 font-semibold break-all"
            v-if="item.link"
            :to="item.link"
            :aria-label="item.text"
            no-rel
          >
            {{ item.text }}
          </NuxtLink>
          <p
            class="text-xl text-casetrue-2 font-semibold break-words"
            v-else
            v-text="item.text"
          />
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
const { myContacts } = await $fetch("/api/myContacts");
// const { data } = await useAsyncData("myContacts", () => $fetch("/api/myContacts"));
</script>
