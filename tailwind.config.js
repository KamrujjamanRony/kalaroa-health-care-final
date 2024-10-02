/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    themes: ["light", {
      mytheme: {
        "primary": "#006EFB",
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      },
    },],
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs"), require("daisyui")]
}