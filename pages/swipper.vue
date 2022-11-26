<template>
  <container class="mt-40 flex justify-center items-center">
    <div class="flex items-center justify-center relative w-[80%]">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper flex gap-4">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
      </div>
      <!-- If pagination is needed -->
      <div class="swiper-pagination !-bottom-12 flex justify-center gap-2"></div>
      <!-- If navigation buttons are needed -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </container>
</template>

<script setup>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

// configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
// previously it was before export default. Moved here for performance issues. Move back in case of problems.
// init Swiper:  eslint-disable used for deleting error of unsued const swiper
/* eslint-disable no-unused-vars */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // @see https://swiperjs.com/swiper-api#parameters
  loop: false,
  effect: "Creative",
  grabCursor: true,
  slidesPerView: 1,
  animating: true,
  keyboard: true,
  mousewheel: true,
  // speed: 600,
  // parallax: true,
  // spaceBetween: 30,
  // scrollbar: {
  //   hide: true,
  // },
  // slidesPerView: 'auto',
  // centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
  },
  // remove unused modules if needed
  modules: [Navigation, Pagination, EffectCards, Autoplay],
  // Pagination if needed
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // Autoplay if needed
  // autoplay: {
  //   delay: 1500,
  // },
  // Navigation arrows if needed
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  style: {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  },
});
// you can use different options later
swiper.on("activeIndexChange", (swiper) => {
  console.log(swiper);
});
</script>

<style lang="scss" scoped>
.swiper {
  height: 320px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-pagination {
  .swiper-pagination-bullet {
    color: aqua !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}
.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}
.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}
.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}
.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}
.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}
.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}
.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}
.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}
.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
