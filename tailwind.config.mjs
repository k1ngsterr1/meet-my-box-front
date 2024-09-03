/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#333",
        main: "#220CF3",
        hover: "#1E0AD1",
      },
    },
  },
  plugins: [],
};
