module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			"mobile-sm": "320px",
			"mobile-md": "375px",
			"mobile-lg": "425px",
			tablet: "768px",
			computer: "1024px",
			"computer-lg": "1440px",
			"computer-xl": "2560px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
