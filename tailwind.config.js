/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-bright-blue": "hsl(220, 98%, 61%)",
      "white": "hsl(0, 0%, 100%)",
      "primary-check-bg":
        "linear-gradient linear-gradient(120deg, rgb(87, 221, 255) 0%, rgb(192, 88, 243) 100%)",
      // lt light theme
      "lt-light-gray": "hsl(0, 0%, 98%)",
      // -v very
      "lt-v-light-gray-blue": " hsl(236, 33%, 92%)",
      "lt-gray-blue": "hsl(233, 11%, 84%)",
      "lt-dark-gray-blue": " hsl(236, 9%, 61%)",
      "lt-deep-gray-blue": "hsl(235, 19%, 35%)",
      // dk dark theme
      "dk-v-dark-blue": "hsl(235, 21%, 11%)",
      // Very Dark Desaturated Blue:
      "dk-vd-blue": "hsl(235, 24%, 19%)",
      "dk-lt-gray-blue": "hsl(234, 39%, 85%)",
      // hv hover
      "dk-gray-blue-hv": "hsl(236, 33%, 92%)",
      "dk-dark-gray-blue": "hsl(234, 11%, 52%)",
      "dk-v-dark-gray-blue": "hsl(233, 14%, 35%)",
      "dk-deep-dark-blue": "hsl(237, 14%, 26%)",
    },
    screens: {
      md: "1170px",
      sm: "375px",
    },
    extend: {},
  },
  plugins: [],
};
