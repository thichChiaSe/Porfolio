/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /grid-cols-./,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
