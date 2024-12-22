/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montseerat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [daisyui],
};
