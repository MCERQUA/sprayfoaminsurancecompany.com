import type { Config } from "tailwindcss";

// Stitch: Clean Swiss Minimal — #ffffff white, #0d6e6e teal, Inter

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#ffffff",
        sand: "#f5f5f5",
        white: "#ffffff",
        clay: {
          DEFAULT: "#0d6e6e",
          dark: "#0a5555",
          light: "#0f8080",
          50: "#e6f3f3",
          100: "#c2e0e0",
          200: "#8dc3c3",
          300: "#5aabab",
          400: "#2d9090",
          500: "#0f8080",
          600: "#0d6e6e",
          700: "#0a5555",
          800: "#073d3d",
          900: "#042828",
        },
        sage: {
          DEFAULT: "#1a1a1a",
          dark: "#000000",
          light: "#333333",
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#bdbdbd",
          300: "#9e9e9e",
          400: "#757575",
          500: "#616161",
          600: "#424242",
          700: "#212121",
        },
        gold: {
          DEFAULT: "#0f8080",
          dark: "#0d6e6e",
          light: "#12a0a0",
          50: "#e6f3f3",
          100: "#c2e0e0",
          200: "#8dc3c3",
          300: "#5aabab",
          400: "#2d9090",
          500: "#0f8080",
          600: "#0d6e6e",
        },
        espresso: "#000000",
        cocoa: "#1a1a1a",
        mocha: "#666666",
        adobe: "#e0e0e0",
        adobeDark: "#c5c5c5",
      },
      fontFamily: {
        headline: ["'Inter'", 'system-ui', 'sans-serif'],
        body: ["'Inter'", 'system-ui', 'sans-serif'],
        label: ["'Inter'", 'system-ui', 'sans-serif'],
        heading: ["'Inter'", 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        arch: "0.5rem",
        arch2: "0.5rem",
        "4xl": "0.5rem",
        "5xl": "0.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #ffffff 0%, #f5f5f5 40%, #f0f9f9 70%, #ffffff 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(13,110,110,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(13,110,110,0.03) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #0d6e6e 0%, #0f8080 100%)",
        "sage-gradient": "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
        "gold-gradient": "linear-gradient(135deg, #0f8080 0%, #12a0a0 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(13,110,110,0.22), 0 4px 12px -6px rgba(0,0,0,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(13,110,110,0.28), 0 10px 30px -10px rgba(0,0,0,0.10)",
        card: "0 2px 8px -2px rgba(0,0,0,0.06), 0 1px 3px -1px rgba(0,0,0,0.04)",
        "card-hover": "0 20px 50px -15px rgba(13,110,110,0.24), 0 8px 20px -8px rgba(0,0,0,0.10)",
        arch: "inset 0 -8px 30px -10px rgba(13,110,110,0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
