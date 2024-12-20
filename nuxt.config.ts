import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	future: { compatibilityVersion: 4 },
	build: { transpile: ['vuetify'] },
	imports: { dirs: ['./stores'] },

	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: { httpEndpoint: process.env.GQL_URL || '' },
		},
	},

	vite: {
		optimizeDeps: {
			include: ['graphql-tag'],
		},
		plugins: [vuetify()],
	},

	modules: ['@nuxtjs/apollo', ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]],
	compatibilityDate: '2024-11-11',
})
