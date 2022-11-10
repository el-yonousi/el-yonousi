<template>
  <container
    class="px-4 sm:px-6 flex justify-center custom-class-nav-scroll md:mx-auto mx-0"
    id="contact"
  >
    <div class="md:flex-[50%] flex-[100%] flex flex-col md:items-center">
      <heading :text="'contact me'" :classes="'!text-5xl'" />
      <form class="flex flex-col gap-3 md:w-[80%]" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div class="w-full">
          <label for="fullName"></label>
          <input
            class="dark:bg-dark-2 dark:text-dark-4 text-dark-2 w-full rounded dark:border-0 md:text-lg text-base md:p-6 p-4"
            autocomplete="off"
            placeholder="Enter your full name here"
            type="text"
            name="fullName"
            id="fullName"
            required
          />
        </div>
        <div class="w-full">
          <label for="email"></label>
          <input
            class="dark:bg-dark-2 dark:text-dark-4 text-dark-2 w-full rounded dark:border-0 md:text-lg text-base md:p-6 p-4"
            autocomplete="off"
            placeholder="Enter your email here"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="w-full">
          <label for="message"></label>
          <textarea
            class="dark:bg-dark-2 dark:text-dark-4 text-dark-2 w-full rounded dark:border-0 min-h-[100px] max-h-[300px] md:text-lg text-base md:p-6 p-4"
            autocomplete="off"
            placeholder="Enter your message here"
            name="message"
            id="message"
          />
        </div>
        <div class="w-full">
          <div data-netlify-recaptcha="true"> </div>
          <!-- <input
            class="dark:bg-dark-2 dark:text-dark-4 text-dark-2 w-full rounded dark:border-0 md:text-lg text-base md:p-6 p-4"
            autocomplete="off"
            placeholder="Enter your full name here"
            type="text"
            name="fullName"
            id="fullName"
            required
          /> -->
        </div>
        <div class="w-full">
          <input
            type="submit"
            class="capitalize bg-casetrue text-white rounded w-full font-bold cursor-pointer md:text-lg text-base md:p-6 p-4"
            value="send message"
          />
        </div>
      </form>
    </div>
    <div class="md:block hidden flex-[50%]">
      <img class="rounded h-full object-cover" src="/img/contact.png" alt="contact" />
    </div>
  </container>
</template>
