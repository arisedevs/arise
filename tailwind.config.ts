import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "baseBackground": "#0A0D0F",
        "ivory": "#FFFFF0",
        "baseFont": "#969696",
        "main": "#005B41",
        "main-light": "rgb(0, 91, 65, .3)",
        "secondary": "#008170",
        "secondary-light": "#00b199",
        "accent": "#232D3F",
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
