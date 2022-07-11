/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				globleBlue: {
					500: '#0184D0'
				},
				globleBlack: {
					500: '#232323'
				}
			}
		},
	},
	plugins: [],
};
