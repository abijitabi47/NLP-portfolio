import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070B19",
          900: "#0B1124",
          800: "#121B38",
          700: "#1C2951",
        },
        royal: {
          900: "#1F133D",
          800: "#2D1B5A",
          700: "#3E267B",
          500: "#6B46C1",
        },
        ivory: {
          50: "#FDFBF7",
          100: "#F7F3E8",
          200: "#EFE7D3",
        },
        gold: {
          300: "#E8D08B",
          400: "#D4AF37",
          500: "#B89327",
          600: "#947318",
        },
        lavender: {
          200: "#E2DAF5",
          300: "#C9BBE9",
          400: "#A792D8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      perspective: {
        "1200": "1200px",
        "2000": "2000px",
      },
    },
  },
  plugins: [],
};
export default config;
