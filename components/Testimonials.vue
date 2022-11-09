<template>
  <container class="px-4 sm:px-6 w-full custom-class-nav-scroll" id="testimonials">
    <heading
      :text="'What My Friends and teachers Say'"
      :classes="'!text-5xl text-center'"
    />
    <div class="wrapper">
      <button @click="arrowPrev" class="arrow prev z-10">
        <Icon name="material-symbols:chevron-left" />
      </button>
      <button @click="arrowNext" class="arrow next z-10">
        <Icon name="material-symbols:chevron-right" />
      </button>
      <div
        class="card-wrapper"
        @mousedown="onmousedown"
        @mousemove="onmousemove"
        @mouseup="mouseUpAndLeave"
        @mouseleave="mouseUpAndLeave"
        id="card-wrapper"
      >
        <div
          v-for="(testimonial, index) in data"
          :key="testimonial.fullName + '-' + index"
          class="card-item drop-shadow-sm shadow-sm shadow-dark-3 overflow-hidden rounded-md snap-start lg:blur-[2px] lg:grayscale-[100%] hover:blur-0 hover:grayscale-0 transition duration-[0.3s] ease-in-out delay-75"
        >
          <img
            class="w-full h-52 object-cover"
            :src="testimonial.profile"
            :alt="testimonial.fullName"
            draggable="false"
          />
          <div class="p-4 flex flex-col gap-1">
            <h3
              class="font-bold mb-[3px] inline-block text-xl text-gray-200 capitalize select-none"
              v-text="testimonial.fullName"
            />
            <p class="text-gray-300 truncate select-none" v-text="testimonial.status" />
            <p
              class="text-gray-400 max-h-[100px] overflow-hidden text-ellipsis select-none"
              :title="testimonial.recommendation"
              v-text="testimonial.recommendation"
            />
            <p
              class="p-1 uppercase text-casetrue select-none"
              v-text="testimonial.relationship"
            />
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
let cardWrapper = {};
let widthToScroll = 0;
let cardBounding = {};
let currScroll = 0;
let initPos = 0;
let clicked = false;

if (process.client) {
  cardWrapper = document.querySelector(".card-wrapper");
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

const { data } = await useAsyncData("testimonials", () => $fetch("/api/testimonials"));
</script>

<style>
/* start: Slider */
.wrapper {
  position: relative;
  max-width: 940px;
  width: 100%;
  margin: auto;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
}

.arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.arrow.prev {
  left: 0;
}

.arrow.next {
  right: 0;
}

.card-wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 280px;
  overflow-x: auto;
  padding: 24px;
  gap: 24px;
  cursor: grab;
  scroll-snap-type: x;
  scroll-padding-inline: 24px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.card-wrapper::-webkit-scrollbar {
  display: none;
}

.card-wrapper.grab {
  cursor: grabbing;
  user-select: none;
  scroll-snap-type: none;
  scroll-behavior: auto;
}

/* end: Slider */

@media screen and (max-width: 575px) {
  .arrow {
    display: none;
  }

  .card-wrapper {
    margin-left: -16px;
    width: 100vw;
  }
}
</style>
