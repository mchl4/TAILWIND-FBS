/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        maroonDark: "#6a103f",
        maroonLight: "#a33265",
        malabo: "#f5f5f5",
        magenta: "#b21667",
      },
      content: {
        quoteLeft: 'url("../dist/img/quote-left.svg")',
        quoteRight: 'url("../dist/img/quote-right.svg")',
      },
      backgroundImage: {
        BGoffer: "url('../dist/img/fbs5.jpg')",
        BGbanner: "url('../dist/img/fbs3.svg')",
      },
      keyframes: {
        mGradient: {
          "0%": { "background-position": "25%" },
          "100%": { "background-position": "40% 80%" },
        },
      },
      animation: {
        gradient: "gradient 15s ease forwards;",
        mGradient: "mobileGradient 15s ease forwards;",
      },
    },
    fontFamily:{
      body: ['Montserrat']
    }
  },
  plugins: [],
}