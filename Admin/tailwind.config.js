// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orangeBarber: "#db843a",
      brownBarber: "#4c2d12",
      blackBarber: "#271709",
      creamBarber: "#ffead5",
      whiteBarber: "#fff5eb",
      ...colors,
    },
  },
  plugins: [],
};
