const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/asset/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    {
      pattern: /_(cols|rows)-(.+)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /grid-(rows|cols)-(.+)/,
      variants: ["sm", "md", "lg", "xl"],
    }
  ],
  theme: {
    fontFamily : {
      sans : ['Inter'],
      mono : ['IBM Plex Mono']
    },
    fontSize : {
      xs : ['12px', {lineHeight: '0.635rem'}],
      sm : ['13px', {lineHeight: '0.812rem'}],
      md : ['16px', {lineHeight: '1rem'}],
      lg : ['20px', {lineHeight: '1.250rem'}],
      xl : ['24px', {lineHeight: '1.562rem'}],
      '2xl' : ['32px', {lineHeight: '1.938rem'}],
      '3xl' : ['36px', {lineHeight: '2.438rem'}],
      '4xl' : ['48px', {lineHeight: '3.062rem'}],
      '6xl' : ['76px', {lineHeight: '4.750rem', fontWeight: "600"}],
      '5xl' : ['64px', {lineHeight: '3.812rem', fontWeight: "600"}],
      '7xl' : ['96px', {lineHeight: '5.938rem', fontWeight: "700"}],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary : {
          50 : "#EBFAFF",
          100 : "#DBF4FF",
          200 : "#BEEAFF",
          300 : "#97DAFF",
          400 : "#6EBEFF",
          500 : "#4CA1FF",
          600 : "#2D7FFE",
          700 : "#216AE1",
          800 : "#1E59B5",
          900 : "#10203A",
          950 : "#0B192F"
        },
        rockblue : {
          50 : "#F4F6F9",
          100 : "#EBEFF4",
          200 : "#DAE0EB",
          300 : "#C3CCDE",
          400 : "#A7B2CE",
          500 : "#939DC1",
          600 : "#7C83AF",
          700 : "#6A7098",
          800 : "#575C7C",
          900 : "#4A4E65",
          950 : "#2B2D3B"
        },
        spray : {
          50 : "#F0FDFA",
          100 : "#CCFBF1",
          200 : "#7AF2DA",
          300 : "#5FE9D2",
          400 : "#2FD2BD",
          500 : "#16B6A4",
          600 : "#0E9386",
          700 : "#10756C",
          800 : "#125D58",
          900 : "#144D4A",
          950 : "#042F2E"
        } 
      },

    },
  },
  plugins: [
    plugin(({ addComponents }) => {
    // grid
    const [_, ...values] = [...Array(13).keys(), "full", "auto"];
    const gridRowCol = {};
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
    })
  ],
}
