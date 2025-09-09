import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sidetick: { night:"#000a25", blue:"#99b2dd", violet:"#a288e3", beige:"#ffecd1", orange:"#ff7d00" }
      },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,.25)" },
      maxWidth: { prose: "70ch" }
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
