/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {colors: {
        primary: "#179A40",
        primaryContrast: "#ACF7C5",
        secondary: "#070D3D",
        secondaryContrast: "#ACF7C5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mooxy: ["Mooxy", "sans-serif"],
      },
      boxShadow: {
        card: "0 3.91px 3.91px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
