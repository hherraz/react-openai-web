/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./index.html", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [],
};
