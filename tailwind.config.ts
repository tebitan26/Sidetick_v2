// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Sidetick V2
        "sidetick-bg": "#1B003B", // bleu violet très foncé – fond principal
        "sidetick-violet": "#7A3CFF", // violet électrique – accent / primaire
        "sidetick-pink": "#FF0099", // magenta vif – accent festif
        "sidetick-red": "#FB4437", // rouge punchy – alerte / highlights
        "sidetick-orange": "#F79D65", // on garde l’orange pour certains CTA
      },
      backgroundImage: {
        "sidetick-gradient":
          "radial-gradient(circle at top, rgba(122,60,255,0.35), transparent 55%), radial-gradient(circle at bottom, rgba(255,0,153,0.28), transparent 55%)",
      },
      boxShadow: {
        "sidetick-glow":
          "0 0 40px rgba(122,60,255,0.5), 0 0 80px rgba(255,0,153,0.45)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
