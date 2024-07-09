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
        app: {
          white: "hsl(21, 94%, 75%)",
          black: "hsl(21, 94%, 75%)",
          "neutral-50": "hsl(0, 0%, 98%)",
          "neutral-100": "hsl(0, 0%, 95%)",
          "neutral-900": "hsl(0, 0%, 6%)",
          brown: "hsl(22, 65%, 57%)",
          salmon: "hsl(21, 94%, 75%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
