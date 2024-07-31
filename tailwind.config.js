/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexGrow: {
        1: 1,
        2: 2,
      },
    },
    colors: {
      "custom-color": "#0e212d",
      "matn-color": "#fff",
      "matn-blue": "#3b82f6",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
