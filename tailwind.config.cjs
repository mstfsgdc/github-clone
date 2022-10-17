/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fcfdfe",
          200: "#f9fbfe",
          300: "#f6fafd",
          400: "#f3f8fd",
          500: "#f0f6fc",
          600: "#c0c5ca",
          700: "#909497",
          800: "#606265",
          900: "#303132"
        },
        bg_black: {
          100: "#cfcfd1",
          200: "#9ea0a2",
          300: "#6e7074",
          400: "#3d4145",
          500: "#0d1117",
          600: "#0a0e12",
          700: "#080a0e",
          800: "#050709",
          900: "#030305"
        },
        lightblack: {
          100: "#cccdce",
          200: "#999b9d",
          300: "#67686b",
          400: "#34363a",
          500: "#010409",
          600: "#010307",
          700: "#010205",
          800: "#000204",
          900: "#000102"
        },
        secondary: {
          100: "#f4f6f7",
          200: "#e9edf0",
          300: "#dfe3e8",
          400: "#d4dae1",
          500: "#c9d1d9",
          600: "#a1a7ae",
          700: "#797d82",
          800: "#505457",
          900: "#282a2b"
        },
        border: {
          100: "#d6d7d8",
          200: "#acafb1",
          300: "#83868b",
          400: "#595e64",
          500: "#30363d",
          600: "#262b31",
          700: "#1d2025",
          800: "#131618",
          900: "#0a0b0c"
        },
        btn_primary: {
          100: "#d3e7d7",
          200: "#a7cfaf",
          300: "#7bb686",
          400: "#4f9e5e",
          500: "#238636",
          600: "#1c6b2b",
          700: "#155020",
          800: "#0e3616",
          900: "#071b0b"
        },
        gray: {
          100: "#e8eaec",
          200: "#d1d4d8",
          300: "#b9bfc5",
          400: "#a2a9b1",
          500: "#8b949e",
          600: "#6f767e",
          700: "#53595f",
          800: "#383b3f",
          900: "#1c1e20"
},
      }
    },
  },
  plugins: [],
}
