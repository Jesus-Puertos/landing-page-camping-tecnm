import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryClaro: "#51d1f6",
        secondaryClaro: "#4a5568",

        primary: "#FF6363",
        secondary: "#ddd",

        innovatecnm: "#FF6363",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      
    },
    
  },
  plugins: [animations],
};
