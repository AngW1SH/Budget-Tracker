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
  },
  plugins: [],
};
