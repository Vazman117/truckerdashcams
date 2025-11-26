import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
theme: {
  extend: {
    colors: {
      "border": "hsl(var(--border) / <alpha-value>)",
      "card-border": "hsl(var(--card-border) / <alpha-value>)",
      "popover-border": "hsl(var(--popover-border) / <alpha-value>)",
      "primary-border": "var(--primary-border)",
      "secondary-border": "var(--secondary-border)",
      "muted-border": "var(--muted-border)",
      "accent-border": "var(--accent-border)",
      "destructive-border": "var(--destructive-border)",
      "sidebar-border": "hsl(var(--sidebar-border) / <alpha-value>)",
      "sidebar-primary-border": "var(--sidebar-primary-border)",
      "sidebar-accent-border": "var(--sidebar-accent-border)"
    }
  }
},
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
