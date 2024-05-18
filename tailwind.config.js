/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1152px",
      },
      colors: {
        primary: "#FA4A0C",
        headcolor: "#252B42",
        textcolor: "#737373",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/Background-img.svg')",
        "footer-texture": "url('/img/Background-img-2.svg')",
      },
      fontFamily: {
        poppins: ["poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
