/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "**/*.js"],
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
          darkest: "#1f2024",
          dark: "#7f7f7f",
          semidark: "#CDCDCD",
          DEFAULT: "#c0ccda",
          semilight: "#f3f2f7",
          light: "#f8f8fa",
          lightest: "#fcfbfd",
          subtitle: "#B7B6BE",
          heroBg: "#F9F8FC",
          textProject: "#7A7A7A",
          textnav: "#AAAAAE",
          textSumm: "#939097",
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
      backgroundImage: {
        "hero-pattern": "url('/images/projects-images/cover-navicon.jpg')",
        "project-summ1": "url('/images/projects-images/project-summary1.png')",
        "project-summ2": "url('/images/projects-images/project-summary2.png')",
        "project-summ3": "url('/images/projects-images/project-summary3.png')",
        "project-summ4": "url('/images/projects-images/project-summary4.png')",
        "project-summ5": "url('/images/projects-images/project-summary5.png')",
        "project-summ6": "url('/images/projects-images/project-summary6.png')",
        "project-summ7": "url('/images/projects-images/project-summary7.png')",
        "project-summ8": "url('/images/projects-images/project-summary8.png')",
      },
    },
  },
  plugins: [],
};
