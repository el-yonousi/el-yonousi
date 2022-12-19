<template>
  <div class="relative group" draggable="false">
    <button
      aria-label="previous"
      @click="arrowPrev"
      class="group-hover:opacity-80 opacity-0 absolute top-2/4 -translate-y-1/2 w-8 h-14 md:flex hidden items-center justify-center z-10 cursor-pointer left-0 transition-all duration-300 ease-in-out"
    >
      <slot name="prev">
        <Icon class="w-12 h-12" name="material-symbols:chevron-left-rounded" />
      </slot>
    </button>
    <button
      aria-label="next"
      @click="arrowNext"
      class="group-hover:opacity-80 opacity-0 absolute top-2/4 -translate-y-1/2 w-8 h-14 md:flex hidden items-center justify-center z-10 cursor-pointer right-0 transition-all duration-300 ease-in-out"
    >
      <slot name="next">
        <Icon class="w-12 h-12" name="material-symbols:chevron-right-rounded" />
      </slot>
    </button>
    <div
      :class="classes"
      class="fade-l card-wrapper grid grid-flow-col auto-cols-[280px] overflow-x-auto p-6 gap-6 snap-x md:scroll-px-6 scroll-smooth scrollbar-none"
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
const { id, classes } = defineProps({
  id: String,
  classes: String,
});
let cardWrapper;
let widthToScroll;
let cardBounding;
let currScroll;
let initPos;
let clicked;

onMounted(() => {
  load();
});

const load = async () => {
  if (cardWrapper == null) {
    cardWrapper = await document.querySelector(`#${id}`);
    widthToScroll = await cardWrapper?.children[0]?.offsetWidth;
    cardBounding = await cardWrapper?.getBoundingClientRect();
    currScroll = 0;
    initPos = 0;
    clicked = false;
  }
};

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
  cardWrapper?.classList?.remove("grab");
  clicked = false;
};
</script>

<style scoped>
.card-wrapper.grab {
  @apply cursor-grabbing select-none snap-none scroll-auto !important;
}
</style>
