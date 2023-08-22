/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "center-md":
          "0 1px 15px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(16 24 40 / 0.1)",
      },
    },
    colors: {
      main: {
        200: "#F9F5FF",
        300: "#F4EBFF",
        500: "#B692F6",
        800: "#7F56D9",
        900: "#53389E",
      },
      title: {
        100: "#98A2B3",
        200: "#757575",
        400: "#667085",
        600: "#344054",
        700: "#4D4D4D",
        900: "#101828",
      },
      white: "#FFFFFF",
      black: "#000000"
    },
    plugins: [],
  }
}
