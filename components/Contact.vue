<template>
  <container
    class="px-4 sm:px-6 custom-class-nav-scroll w-full md:mx-auto mx-0"
    id="contact"
  >
    <heading class="text-center">
      <span v-text="'contact me'" />
    </heading>
    <div class="grid md:grid-cols-2 grid-cols-1">
      <div class="md:flex justify-center items-center hidden shadow-xl">
        <Icon name="tabler:zoom-code" class="w-52 h-52" />
      </div>
      <div class="md:flex-[50%] flex-[100%] flex flex-col md:items-center">
        <form
          class="flex flex-col gap-3 md:w-[80%]"
          name="custom-form"
          action="/form.success"
          method="POST"
          netlify
        >
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
            <input
              type="submit"
              class="capitalize bg-casetrue text-white rounded w-full font-bold cursor-pointer md:text-lg text-base md:p-6 p-4"
              value="send message"
            />
          </div>
        </form>
      </div>
    </div>
  </container>
</template>
