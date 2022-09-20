/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#00D970",
            },
            fontFamily: {
                sans: ["Libre Franklin", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 10s linear infinite",
            },
        },
    },
    plugins: [],
};
