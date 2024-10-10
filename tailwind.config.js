/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#1D1D20",
        },
        customTeal: "rgb(79,209,197)",
        customGrey: "rgb(212 212 216)",
        grayNew: "rgb(46, 46, 51)",
        purple: {
          500: "rgb(159 122 234)",
        },
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".perspective-1000": {
            perspective: "1000px",
          },
          ".preserve-3d": {
            transformStyle: "preserve-3d",
          },
        };
        addUtilities(newUtilities);
      },
    ],
  },
};
