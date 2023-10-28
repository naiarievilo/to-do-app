/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/**/**/*.{js,jsx}",
    "./src/**/**/**/*.{js,jsx}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "3xs": "240px",
      "2xs": "360px",
      xs: "412px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1920px",
      "3xl": "2560px",
      "4xl": "3840px",
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
