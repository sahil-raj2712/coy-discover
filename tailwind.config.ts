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
        coy: {
          pink: "#FF3366",
          rose: "#E11D48",
          purple: "#7C3AED",
          peach: "#FF6B6B",
          dark: "#121217",
          card: "#1E1E26",
          border: "#2E2E3A",
          muted: "#8E8E9F"
        }
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
        'like': '0 0 30px rgba(34, 197, 94, 0.4)',
        'pass': '0 0 30px rgba(239, 68, 68, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
