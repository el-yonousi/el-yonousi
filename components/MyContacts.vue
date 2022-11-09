<template>
  <container class="px-4 sm:px-6" id="mycontact">
    <heading :text="'my contacts'" :classes="'!text-5xl text-center'" />
    <div class="flex flex-row flex-wrap gap-6">
      <div
        class="flex-[38%] w-full flex items-center gap-3 dark:bg-dark-2 bg-gray-300 rounded p-6"
        v-for="(item, index) in data"
        :key="`${index}-${item.title}`"
      >
        <Icon :name="item.icon" class="w-8 h-8 text-casetrue"/>
        <!-- <component :is="item.icon" class="w-8 text-casetrue" /> -->
        <div class="flex flex-col gap-3">
          <div
            v-text="item.title"
            class="tracking-tight font-bold dark:text-casetrue text-gray-900 capitalize text-[32px]"
          ></div>
          <a
            class="text-xl text-casetrue-2 font-semibold break-all"
            v-if="item.link"
            :href="item.link"
            v-text="item.text"
          />
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

<script>
// PhoneIcon,
// AtSymbolIcon,
// MapPinIcon,
// ClockIcon,
</script>
<script setup>
const { data } = await useAsyncData("myContacts", () => $fetch("/api/myContacts"));
</script>
