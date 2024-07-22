import textLogoData from "./src/data/tailwind/text-logo.json";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const logoColors: {
  [key: string]: string;
} = {};

const logoColorSafelist: string[] = [];

for (const tool of textLogoData) {
  const color = tool.color;
  const name = tool.colorName;
  logoColors[name] = `${color}`;
  logoColorSafelist.push(name);
}

console.log(logoColorSafelist)

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /_(cols|rows)-(.+)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /grid-(rows|cols)-(.+)/,
      variants: ["sm", "md", "lg", "xl"],
    },

    {
      pattern: /text-logo-(.+)/,
      variants: logoColorSafelist,
    },
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      mono: ["IBM Plex Mono"],
    },
    fontSize: {
      xs: ["12px", { lineHeight: "14px" }],
      sm: ["13px", { lineHeight: "16px" }],
      md: ["16px", { lineHeight: "19px" }],
      lg: ["20px", { lineHeight: "24px" }],
      xl: ["24px", { lineHeight: "29px" }],
      "2xl": ["32px", { lineHeight: "38px" }],
      "3xl": ["36px", { lineHeight: "43px" }],
      "4xl": ["48px", { lineHeight: "58px" }],
      "6xl": ["76px", { lineHeight: "77px", fontWeight: "600" }],
      "5xl": ["64px", { lineHeight: "91px", fontWeight: "600" }],
      "7xl": ["96px", { lineHeight: "115px", fontWeight: "700" }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#EBFAFF",
          100: "#DBF4FF",
          200: "#BEEAFF",
          300: "#97DAFF",
          400: "#6EBEFF",
          500: "#4CA1FF",
          600: "#2D7FFE",
          700: "#216AE1",
          800: "#1E59B5",
          900: "#10203A",
          950: "#0B192F",
        },
        rockblue: {
          50: "#F4F6F9",
          100: "#EBEFF4",
          200: "#DAE0EB",
          300: "#C3CCDE",
          400: "#A7B2CE",
          500: "#939DC1",
          600: "#7C83AF",
          700: "#6A7098",
          800: "#575C7C",
          900: "#4A4E65",
          950: "#2B2D3B",
        },
        spray: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#7AF2DA",
          300: "#5FE9D2",
          400: "#2FD2BD",
          500: "#16B6A4",
          600: "#0E9386",
          700: "#10756C",
          800: "#125D58",
          900: "#144D4A",
          950: "#042F2E",
        },
        terminal: {
          blue: "#7DCFFF",
          purple: "#BB9AF7",
          red: "#F7768E",
          green: "#9ECE6A",
          yellow: "#9ECE6A",
        },
        logo: logoColors,
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      const [_, ...values]: (string | number)[] = [
        ...Array.from(Array(13).keys()),
        "full",
        "auto",
      ];
      const gridRowCol: {
        [key: string]: {
          gridColumnStart?: string;
          gridColumnEnd?: string;
          gridRowStart?: string;
          gridRowEnd?: string;
        };
      } = {};

      for (let start of values) {
        for (let span of values) {
          gridRowCol[`._cols-${start}_${span}`] = {
            gridColumnStart: `${start}`,
            gridColumnEnd: `span ${span}`,
          };

          gridRowCol[`._rows-${start}_${span}`] = {
            gridRowStart: `${start}`,
            gridRowEnd: `span ${span}`,
          };
        }
      }

      addComponents(gridRowCol);
    }),
  ],
} satisfies Config;
