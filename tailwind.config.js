/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#080708",
        card: "#110E13",
        "primary-red": "#E60000",
        "red-glow": "rgba(230, 0, 0, 0.35)",
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
