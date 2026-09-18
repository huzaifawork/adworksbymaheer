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
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        // `animate-fadeIn` was used on the modal scrim without ever being
        // defined, so it silently did nothing.
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        // The panel itself rises and settles rather than just appearing.
        modalIn: {
          from: { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 200ms ease-out both",
        modalIn: "modalIn 260ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
