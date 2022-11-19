<template>
  <container
    class="px-4 sm:px-6 custom-class-nav-scroll w-full md:mx-auto mx-0"
    id="contact"
  >
    <heading class="text-center">
      <span v-text="'contact me'" class="" />
    </heading>
    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3">
      <div
        class="md:py-0 py-5 md:bg-gradient-to-l md:bg-transparent bg-dark-2 from-dark-1 to-dark-2 flex justify-center items-center rounded-md"
      >
        <Icon
          name="noto-v1:man-technologist-dark-skin-tone"
          class="grayscale w-52 h-52"
        />
      </div>
      <div class="md:flex-[50%] flex-[100%] flex flex-col md:items-center">
        <form
          class="flex flex-col gap-3 md:w-[80%]"
          name="contactme"
          action="/form.success"
          method="POST"
          data-netlify="true"
          @submit.prevent="handleSubmitForm"
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
              v-model="form.fullName"
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
              v-model="form.email"
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
              v-model="form.message"
            />
          </div>
          <div class="w-full">
            <button
              type="submit"
              class="bg-clip-bg text-transparent bg-gradient-to-r from-casetrue to-casetrue-2 capitalize dark:bg-casetrue dark:text-dark-1 dark:hover:bg-casetrue-2 rounded w-full font-bold cursor-pointer md:text-lg text-base md:p-6 p-4 transition-all duration-300 ease-in-out"
            >
              <span v-text="'send message'" />
              <span v-if="pending" v-text="'...'" class="animate-pulse" />
            </button>
          </div>
        </form>
      </div>
    </div>
    <modal v-if="openModal" @close-button="() => (openModal = false)">
      <template #close>
        <button aria-label="close"></button>
      </template>
      <template #component>
        <p>
          <span
            v-text="
              'thank you for contacting us, the message was submitted with a success. '
            "
          />
          <Icon name="material-symbols:check-circle" class="text-green-400" />
        </p>
      </template>
      <template #cancel>
        <button aria-label="cancel"></button>
      </template>
      <template #submit>
        <button
          aria-label="submit"
          @click="openModal = false"
          class="px-2 py-1 dark:bg-casetrue dark:hover:bg-casetrue-2 rounded transition-all duration-300 ease-in-out"
        >
          <span v-text="'OK'"></span>
        </button>
      </template>
    </modal>
  </container>
</template>

<script setup>
const router = useRouter();
const openModal = ref(false);
const pending = ref(false);
const form = ref({
  fullName: "",
  email: "",
  message: "",
});
const client = useSupabaseClient();
const handleSubmitForm = async () => {
  pending.value = true;
  const { data, error } = await client.from("forms").insert([
    {
      fullName: form.value.fullName,
      email: form.value.email,
      message: form.value.message,
    },
  ]);

  if (error) {
    throw createError({
      message: error.message,
      statusCode: error.statusCode,
      fatal: true,
    });
  }
  openModal.value = true;
  pending.value = false;
  form.value = {};
};
</script>
