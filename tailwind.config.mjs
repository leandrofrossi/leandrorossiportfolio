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
				/* lightmode(#a0d9ef,#008aff) gradiente fondo*/
				light: {
				  primary: '#ffffff',
				  text: '#333333',
				},
				// Personaliza los colores para el modo oscuro
				/* darkmode(#051327, #000) gradiente fondo*/
				dark: {
				  primary: '#1f2937',
				  text: '#f9fafb',
				},
			  },
		},
	},
	plugins: [],
}
