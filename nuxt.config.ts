import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@primevue/nuxt-module', '@nuxtjs/google-fonts', '@pinia/nuxt'],
	primevue: {
		importTheme: { from: '@/themes/light.theme.ts' },
		options: {
			theme: {
				preset: Aura,
			},
		},
	},
	googleFonts: {
		prefetch: true,
		families: {
			'Open Sans': [300, 400, 500, 600, 800, 900],
			Montserrat: [400, 500, 600, 700],
		},
	},
	pinia: {
		storesDirs: ['@/stores/**'],
	},
});
