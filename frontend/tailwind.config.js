/** @type {import('tailwindcss').Config} */

export default {
  content: {
    relative: true,
    files: ["./src/**/*.{js,jsx}", "./index.html"],
  },
  theme: {
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
      "4xl": "3840px"
    },

    extend: {
      screens: {
      },
    },
  },
  plugins: [],
};
