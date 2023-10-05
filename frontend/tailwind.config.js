/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: {
    relative: true,
    files: [
      "./src/**/*.{js,jsx}",
      "./index.html",
    ]
  },
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
