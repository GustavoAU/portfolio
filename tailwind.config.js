/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "**/*.js", "./styles/**/*.{css,scss}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2048px",
    },
    container: {
      center: true,
    },

    extend: {
      container: {
        screens: {
          xl: "1920px",
        },
      },

      borderRadius: {
        xxl: "30px",
      },

      screens: {
        xs: "500px",
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
          darkest: "#222",
          darker: "#666",
          dark: "#777",
          DEFAULT: "#999",
          light: "#aaa",
          lighter: "#ddd",
          lightest: "#FCFBFD",
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
