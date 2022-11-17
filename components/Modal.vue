<template>
  <div
    v-if="open == true"
    class="fixed top-0 bottom-0 left-0 right-0 z-50 dark:bg-dark-1 dark:bg-opacity-95 flex justify-center items-center"
    @click="open = false"
  >
    <div class="dark:bg-dark-2 shadow-lg md:w-[50%] w-[95%] p-4 rounded">
      <slot name="close">
        <div class="w-full text-right">
          <button @click="open = false" class="outline-none group ">
            <Icon
              name="line-md:menu-to-close-transition"
              class="w-6 h-6 dark:text-casetrue dark:hover:text-red-500 transition-all duration-300 ease-in-out"
            />
          </button>
        </div>
      </slot>
      <slot name="component" />
      <div class="flex justify-between">
        <slot name="cancel">
          <button
            @click="open = false"
            class="px-2 py-1 border border-casetrue dark:hover:border-casetrue-2 dark:hover:text-dark-5 rounded outline-none transition-all duration-300 ease-in-out"
            v-text="'cancel'"
          />
        </slot>
        <slot name="submit">
          <button
            @click="open = false"
            class="px-2 py-1 dark:bg-casetrue dark:text-dark-1 dark:hover:bg-casetrue-2 rounded outline-none transition-all duration-300 ease-in-out"
            v-text="'submit'"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const open = useOpen();
</script>

<style scoped></style>
