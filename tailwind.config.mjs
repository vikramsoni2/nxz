/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			keyframes: {
        fadeIn: {
          '0%': { 
						opacity: 0,
						transform: 'translateY(-10px)'
					 },
          '100%': { 
						opacity: 1,
						transform: 'translateY(0px)'
					 },
        }
      },
      animation: {
				appear: 'fadeIn 1s ease forwards',
        appear100: 'fadeIn 1s ease 100ms forwards',
				appear200: 'fadeIn 1s ease 200ms forwards',
				appear300: 'fadeIn 1s ease 300ms forwards',
				appear400: 'fadeIn 1s ease 400ms forwards',
				appear500: 'fadeIn 1s ease 500ms forwards',
				appear600: 'fadeIn 1s ease 600ms forwards',
				appear700: 'fadeIn 1s ease 700ms forwards',
				appear800: 'fadeIn 1s ease 800ms forwards',
				appear900: 'fadeIn 1s ease 900ms forwards',
      },

			fontFamily: {
        Inter: "Inter",
      },

			colors: {
				primary: '#AEB2B7',
				accent: '#3FB27F',
				accentlight:'#4FC28F',
				dark:{
					900: '#1F2023',
					800:'#26272B',
					700:'#303136',
					600:'#37383E',
				}
			}
		},
	},
	plugins: [],
}
