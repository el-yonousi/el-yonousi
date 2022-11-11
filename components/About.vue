<template>
  <container class="px-4 sm:px-6 custom-class-nav-scroll" id="about">
    <heading class="text-center">
      <span v-text="'About Me'" />
    </heading>
    <div class="flex md:flex-row flex-col justify-center">
      <div class="flex-[50%] md:p-10">
        <div class="md:text-xl text-lg dark:text-dark-4 flex flex-col gap-6">
          <p class="">
            Hello, I am Mohamed El YONOUSI, born on March 05, 1996, in Morocco, I have a
            passion for research and self-learning, providing service to society and
            humanity, I always like to share what I have learned, whether by applying it
            to something or sharing it.
          </p>
          <p>
            I learned algorithms and programming concepts starting from the year 2018, and
            the methodology for finding the right solutions to problems, followed by
            applying what I learned to the C programming language, and then followed with
            the concepts of object-oriented programming, by applying it within C#
            programming language, then databases concepts, and so on...
          </p>
        </div>
      </div>
      <div class="flex-[50%] md:flex hidden justify-center items-center shadow-xl">
        <Icon
          name="noto-v1:man-technologist-dark-skin-tone"
          class="grayscale w-52 h-52"
        />
      </div>
    </div>
  </container>
</template>
