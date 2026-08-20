/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08080a",
        card: "#111113",
        card2: "#151517",
        border: "#232326",
        accent: {
          DEFAULT: "#00e095",
          dark: "#00c17f",
        },
        warn: "#f2c94c",
        muted: "#8a8a8e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
        glow: "0 0 30px rgba(0,224,149,0.25)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        pulseRing: "pulseRing 2.2s cubic-bezier(0.22,1,0.36,1) infinite",
      },
    },
  },
  plugins: [],
};
