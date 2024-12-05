import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "390px",
				sm: "768px",
				md: "1024px",
				lg: "1440px",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				bounceIn: {
					"0%": {
						opacity: "0",
						transform: "scale(0.3)",
					},
					"50%": {
						opacity: "0.9",
						transform: "scale(1.05)",
					},
					"70%": {
						opacity: "1",
						transform: "scale(0.9)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				bounceIn: "bounceIn 1s ease-out",
				fadeIn: "fadeIn 1.5s ease-in forwards",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
};
export default config;
