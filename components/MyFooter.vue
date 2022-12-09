<template>
  <section
    data-aos="fade-up"
    data-aos-duration="3000"
    data-aos-anchor-placement="top-bottom"
    class="border-t shadow-casetrue border-casetrue-1 md:py-12 py-16"
    id="footer"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-center items-center gap-6">
        <div class="flex-[30%] flex flex-col md:text-xl text-lg gap-6">
          <div>
            <strong class="dark:text-dark-5">Address</strong>
            <address class="dark:text-dark-4 font-semibold">
              Tetouan, Morocco 93040
            </address>
          </div>
          <div>
            <strong class="dark:text-dark-5"> Feedback</strong>
            <p class="dark:text-dark-4 font-semibold">
              Please send us your ideas, bug reports, suggestions! Any feedback would be
              appreciated.
            </p>
          </div>
          <div>
            <strong class="dark:text-dark-5" v-text="'Contacts'" />
            <ul>
              <li>
                <span class="dark:text-dark-4 font-bold" v-text="'Email: '" />
                <NuxtLink
                  aria-label="elyonousimohamed@gmail.com"
                  target="_blank"
                  class="text-casetrue-1 font-semibold hover:text-casetrue-2"
                  to="mailto:elyonousimohamed@gmail.com"
                >
                  elyonousimohamed@gmail.com
                </NuxtLink>
              </li>
              <li>
                <span class="dark:text-dark-4 font-bold" v-text="'Phone: '" />
                <NuxtLink
                  aria-label="+212 60 347 6173"
                  target="_blank"
                  to="tel:+212603476173"
                  class="text-casetrue-1 font-semibold hover:text-casetrue-2"
                >
                  +212 60 347 6173
                </NuxtLink>
              </li>
              <li>
                <span class="dark:text-dark-4 font-bold" v-text="'Wtsp: '" />
                <NuxtLink
                  aria-label="+212 60 347 6173"
                  target="_blank"
                  to="http://wa.me/+212603476173"
                  class="text-casetrue-1 font-semibold hover:text-casetrue-2"
                >
                  +212 60 347 6173
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex gap-2">
            <NuxtLink
              aria-label="github"
              to="https://github.com/el-yonousi"
              target="_blank"
            >
              <Icon name="mdi:github" class="w-10 h-10 text-dark-4 hover:text-dark-5" />
            </NuxtLink>
            <NuxtLink
              aria-label="linkedin"
              to="https://www.linkedin.com/in/elyonousi/"
              target="_blank"
            >
              <Icon name="mdi:linkedin" class="w-10 h-10 text-dark-4 hover:text-dark-5" />
            </NuxtLink>
          </div>
        </div>
        <iframe
          name="google_maps"
          title="google maps"
          class="flex-[30%] rounded object-cover"
          src="https://www.google.com/maps/d/embed?mid=1Rv27nxlEE8sTBgYSMCHD7G4JPFU&ehbc=2E312F"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <div class="dark:text-dark-4 font-semibold flex gap-3 pt-6">
        <span>
          Mohamed EL YONOUSI - ©
          <strong v-text="new Date().getFullYear()"></strong>
          All Rights Reserved
        </span>
      </div>
    </div>
  </section>
</template>
