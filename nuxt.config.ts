// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
		head: {
			title: 'Mohamed EL YONOUSI',
			meta: [
				{ name: 'description', content: 'I am Mohamed El YONOUSI, born on March 05, 1996, in Morocco, I have a passion for research and self-learning, providing service to society and humanity, I always like to share what I have learned, whether by applying it to something or sharing it. I learned algorithms and programming concepts starting from the year 2018, and the methodology for finding the right solutions to problems, followed by applying what I learned to the C programming language, and then followed with the concepts of object-oriented programming, by applying it within C# programming language, then databases concepts, and so on...' },
				{ name: 'theme-color', content: '#262626' },
				{ property: "og:title", content: "Mohamed EL YONOUSI" },
				{ property: "og:type", content: "portfolio" },
				{ property: "og:url", content: "/" },
				{ property: "og:image", content: "https://gzzgvwttrempaknfssha.supabase.co/storage/v1/object/public/images/site/logo.webp" },
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: 'https://gzzgvwttrempaknfssha.supabase.co/storage/v1/object/public/images/site/favicon.ico' }
			],
		}
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'nuxt-icon',
		'@nuxtjs/supabase',
		'@nuxtjs/i18n',
		// '@nuxt/image-edge'
	],

	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.ts',
		exposeConfig: false,
		injectPosition: 0,
		viewer: true,
	},

	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode'
	},

	i18n: {
		defaultLocale: 'en',
		lazy: true,
		langDir: 'locales/',
		locales: [
			{ code: 'ar', iso: 'ar-MA', name: 'العربية', dir: "rtl", file: "ar.json" },
			{ code: 'en', iso: 'en-US', name: 'English', dir: "ltr", file: "en.json" },
		],
	},

	runtimeConfig: {
		accessTokens: process.env.PERSONAL_ACCESS_TOKENS,
		githubApi: process.env.GITHUB_API,
		// supabaseUrl: process.env.SUPABASE_URL,
		// supabaseKey: process.env.SUPABASE_KEY,
	},

	plugins: [
		'/plugins/mixins/aos.ts',
		'/plugins/i18n.ts'
	]
})
