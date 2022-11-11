<template>
  <div class="relative">
    <button
      @click="arrowPrev"
      class="absolute top-2/4 -translate-y-1/2 w-8 h-14 md:flex hidden items-center justify-center dark:bg-dark-2 dark:bg-opacity-50 dark:hover:bg-opacity-80 z-10 cursor-pointer left-0"
    >
      <slot name="prev">
        <Icon name="material-symbols:chevron-left-rounded" />
      </slot>
    </button>
    <button
      @click="arrowNext"
      class="absolute top-2/4 -translate-y-1/2 w-8 h-14 md:flex hidden items-center justify-center dark:bg-dark-2 dark:bg-opacity-50 dark:hover:bg-opacity-80 z-10 cursor-pointer right-0"
    >
      <slot name="next">
        <Icon name="material-symbols:chevron-right-rounded" />
      </slot>
    </button>
    <div
      class="card-wrapper grid grid-flow-col auto-cols-[280px] overflow-x-auto p-6 gap-6 snap-x md:scroll-px-6 scroll-smooth scrollbar-none"
      @mousedown="onmousedown"
      @mousemove="onmousemove"
      @mouseup="mouseUpAndLeave"
      @mouseleave="mouseUpAndLeave"
      :id="id"
    >
      <slot name="carousel-data"></slot>
    </div>
  </div>
</template>

<script setup>
const { id } = defineProps({
  id: String,
});
let cardWrapper = {};
let widthToScroll = 0;
let cardBounding = {};
let currScroll = 0;
let initPos = 0;
let clicked = false;

if (process.client) {
  cardWrapper = document.getElementById(id);
  widthToScroll = cardWrapper.children[0].offsetWidth;
  cardBounding = cardWrapper.getBoundingClientRect();
  currScroll = 0;
  initPos = 0;
  clicked = false;
}

const arrowPrev = () => {
  cardWrapper.scrollLeft -= widthToScroll;
};

/* Adding the width of the card to the scrollLeft property of the cardWrapper. */
const arrowNext = () => {
  cardWrapper.scrollLeft += widthToScroll;
};

/*  */
const onmousedown = (event) => {
  cardWrapper.classList.add("grab");
  initPos = event.clientX - cardBounding.left;
  currScroll = cardWrapper.scrollLeft;
  clicked = true;
};

const onmousemove = (event) => {
  if (clicked) {
    const xPos = event.clientX - cardBounding.left;
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos);
  }
};

const mouseUpAndLeave = () => {
  cardWrapper.classList.remove("grab");
  clicked = false;
};
</script>

<style scoped>
.card-wrapper.grab {
  @apply cursor-grabbing select-none snap-none scroll-auto !important;
}
</style>
