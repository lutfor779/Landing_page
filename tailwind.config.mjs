/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            ibm: "'IBM Plex Mono', serif",
            source: "'Source Serif 4', serif",
            jakarta: "'Plus Jakarta Sans', serif",
        },
        fontSize: {
            "5xl": ["3.2rem", "4.2rem"],
            base: ["1.6rem", "2.4rem"],
        },

        extend: {
            colors: {
                primary: "#F97316",
                secondary: "#16F973",
                accent: "#7316F9",
                white: "#FFFFFF",
                black: {
                    DEFAULT: "#000000",
                },
                red: {
                    DEFAULT: "#E7000B",
                },
                gray: {
                    DEFAULT: "#6a7282",
                },
            },
            spacing: {
                0.1: ".1rem",
                0.2: ".2rem",
                0.3: ".3rem",
                0.4: ".4rem",
                0.5: ".5rem",
                0.6: ".6rem",
                0.7: ".7rem",
                0.8: ".8rem",
                0.9: ".8rem",
                1: "1rem",
            },
        },
    },
    plugins: [],
};
