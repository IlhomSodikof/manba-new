/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custom-color": "#0e212d",
      "matn-color": "#fff",
      "matn-blue": "#3b82f6",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
