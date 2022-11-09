// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Mohamed EL YONOUSI',
			meta: [
				{ name: 'description', content: 'Web Developer Create full stack web development from scratch, repair old websites, and Add a new twist to ancient sites.' },
				{ name: 'theme-color', content: '#262626' },
				{ property: "og:title", content: "Mohamed EL YONOUSI" },
				{ property: "og:type", content: "portfolio" },
				{ property: "og:url", content: "/" },
				{ property: "og:image", content: "/img/logo.png" },
			],
			htmlAttrs: {
				lang: 'en',
				dir: 'ltr',
			},
			bodyAttrs: {
				class: "dark:bg-dark-1 bg-white",
			},
		}
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'nuxt-icon'
	],

	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		// config: {},
		injectPosition: 0,
		viewer: true,
	},

	colorMode: {
		preference: 'dark', // default value of $colorMode.preference
		fallback: 'dark', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode'
	},

	plugins: ['~/plugins/scroll.js', '~/plugins/follow-scroll.js']
})
