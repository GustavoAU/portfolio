/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "**/*.js"],
  theme: {
    extend: {
      borderRadius: {
        xxl: "30px",
      },

      backdropBlur: {
        xs: "1px",
      },

      fontFamily: {
        inter: ['"Inter Tight"', "Arial", "sans-serif"],
        unbounded: ['"Unbounded"', "Arial", "sans-serif"],
      },

      letterSpacing: {
        tightest: ".04em",
      },

      lineHeight: {
        xxl: "4rem",
      },

      colors: {
        gray: {
          darkest: "#1f2024",
          dark: "#7f7f7f",
          semidark: "#cac9cf",
          DEFAULT: "#c0ccda",
          semilight: "#f3f2f7",
          light: "#f7f7fa",
          lightest: "#fcfbfd",
        },
      },
      height: {
        menu: "calc(100dvh - 32px)",
      },
      minHeight: {
        menu: "calc(100dvh - 32px)",
      },
      maxHeight: {
        menu: "calc(100dvh - 32px)",
      },
    },
  },
  plugins: [],
};
