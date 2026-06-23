import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Red, white & blue civic palette
        navy: {
          50: "#eef2fb",
          100: "#d6e0f5",
          200: "#aec0eb",
          300: "#7d99dc",
          400: "#4f70c9",
          500: "#3454ad",
          600: "#27408b", // primary blue
          700: "#1f3470",
          800: "#1a2b5c",
          900: "#142046",
          950: "#0c1430",
        },
        flag: {
          red: "#b22234",
          "red-dark": "#8c1a28",
          blue: "#27408b",
          "blue-dark": "#1a2b5c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(20, 32, 70, 0.18)",
        "card-hover": "0 20px 45px -15px rgba(20, 32, 70, 0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
