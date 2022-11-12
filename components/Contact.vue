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
        <!-- <form
          class="flex flex-col gap-3 md:w-[80%]"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
        <div class="w-full hidden">
            <label for="fullName">Don't fill this out if you're human:</label>
            <input name="bot-field" />
            
          </div>
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
        </form> -->
        <form name="submit-to-google-sheet">
          <input name="email" type="email" placeholder="Email" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </container>
</template>

<script setup>
if (process.client) {
  const scriptURL =
    "https://script.google.com/macros/s/mohamed-elyonousi.netlify.app/AKfycbxI43qfWlc-5zIDl93EgDmgMkEDM2r4sruL54tRKJq2lIa_v7BoQ_6b-9BcMpnoSq4N6w/exec";
  const form = document.forms["submit-to-google-sheet"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  });
}
</script>
