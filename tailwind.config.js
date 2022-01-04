const tailwindDefaultColors = require('./src/styles/tailwindDefaultColors');
const customColors = require('./src/styles/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'./src/components/**/*.js',
		'./src/components/**/*.jsx',
		'./src/components/**/*.tsx',
		'./src/components/**/*.ts',
	],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				black: {
					shadow: 'rgba(0,0,0,0.7)',
				},
			},
			transitionProperty: {
				visibility: 'visibility, opacity',
			},
		},
		fontFamily: {
			arial: ['Arial', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
			montserratregular: ['montserratregular', 'sans-serif'],
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }
			md: '768px',
			// => @media (min-width: 768px) { ... }
			legacy: '976px',
			// => @media (min-width: 976px) { ... }
			lg: '1024px',
			// => @media (min-width: 1024px) { ... }
			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		colors: { ...tailwindDefaultColors, ...customColors },
	},
	variants: {},
	plugins: [],
	// important: '.tailwind',
};
