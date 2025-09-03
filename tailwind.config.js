/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "serif"], // সঠিক ফন্ট নাম দিন
      },
    },
  },
  plugins: [],
}