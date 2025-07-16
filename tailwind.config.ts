import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Consolas", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        // Specific green/emerald glow for header
        "green-900/60": "0 0 20px rgba(27, 77, 57, 0.6)",
        "green-900/80": "0 0 30px rgba(27, 77, 57, 0.8)",

        // Primary green gradient glows (green-700 to emerald-700)
        "primary-green": "0 0 15px rgba(21, 128, 61, 0.6), 0 0 25px rgba(5, 150, 105, 0.4)",
        "primary-green-card": "0 0 30px rgba(21, 128, 61, 0.3), 0 0 40px rgba(5, 150, 105, 0.2)",

        // Secondary green gradient glows (teal-600 to lime-500)
        "secondary-green": "0 0 15px rgba(13, 148, 136, 0.6), 0 0 25px rgba(132, 204, 22, 0.4)",
        "secondary-green-card": "0 0 30px rgba(13, 148, 136, 0.3), 0 0 40px rgba(132, 204, 22, 0.2)",

        // Accent green gradient glows (lime-400 to cyan-400)
        "accent-green": "0 0 15px rgba(163, 230, 53, 0.6), 0 0 25px rgba(34, 211, 238, 0.4)",
        "accent-green-card": "0 0 30px rgba(163, 230, 53, 0.3), 0 0 40px rgba(34, 211, 238, 0.2)",

        "gray-800/40": "0 0 10px rgba(31, 41, 55, 0.4)", // Subtle gray glow for outlines
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.05)", opacity: "0.7" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 8s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
