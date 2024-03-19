/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "med-title": "46px",
        reg: "16px",
      },
      sans: ["Montserrat", "sans-serif"],

      colors: {
        "orion-gray": {
          50: "#f7f8f8",
          100: "#ededf1",
          200: "#d7d9e0",
          300: "#b4b7c5",
          400: "#8c91a4",
          500: "#6d738a",
          600: "#585d71",
          700: "#434656",
          800: "#3e404e",
          900: "#373943",
          950: "#24252d",
        },
        "orion-blue": {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#1b2553",
        },
      },
    },
  },
  plugins: [],
};
