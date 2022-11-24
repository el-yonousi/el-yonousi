// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
		head: {
			title: 'Mohamed EL YONOUSI',
			meta: [
				{ name: 'description', content: 'Web Developer Create full stack web development from scratch, repair old websites, and Add a new twist to ancient sites.' },
				{ name: 'theme-color', content: '#262626' },
				{ property: "og:title", content: "Mohamed EL YONOUSI" },
				{ property: "og:type", content: "portfolio" },
				{ property: "og:url", content: "/" },
				{ property: "og:image", content: "/img/logo.webp" },
			],
			htmlAttrs: {
				lang: 'en',
				dir: 'ltr',
			},
			bodyAttrs: {
				// class: "",
			},
		}
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'nuxt-icon',
		'@nuxtjs/supabase',
		'@nuxt/image-edge'
	],

	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.ts',
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

	runtimeConfig: {
		accessTokens: process.env.PERSONAL_ACCESS_TOKENS,
		githubApi: process.env.GITHUB_API,
		// supabaseUrl: process.env.SUPABASE_URL,
		// supabaseKey: process.env.SUPABASE_KEY,
	},

	// typescript: {
	// 	shim: false
	// },

	plugins: ['/plugins/mixins/aos.js']
})
