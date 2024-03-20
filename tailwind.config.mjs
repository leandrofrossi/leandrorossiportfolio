/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',		
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Personaliza los colores para el modo claro
				light: {
				  primary: '#ffffff',
				  text: '#333333',
				},
				// Personaliza los colores para el modo oscuro
				dark: {
				  primary: '#1f2937',
				  text: '#f9fafb',
				},
			  },
		},
	},
	plugins: [],
}
