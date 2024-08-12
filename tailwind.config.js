/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
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

      fontWeight: {
        medium: "550px",
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
          darkgray: "#cac9cf",
          semidarkgray: "#7f7f7f",
          DEFAULT: "#c0ccda",
          semilight: "#f3f2f7",
          light: "#f7f7fa",
          lightest: "#fcfbfd",
          semilightgray: "#e5e7eb",
        },

        instagramcolor: {
          royalBlue: "#405DE6	",
          blues: "#5B51D8	",
          purples: "#833AB4	",
          darkpink: "#C13584	",
          purplered: "#E1306C	",
          reds: "#FD1D1D	",
          darkorange: "#F56040	",
          oranges: "#F77737	",
          yellows: "#FCAF45	",
          lightyellow: "#FFDC80	",
        },
        linkedin: {
          blue: "#2867b2",
        },
      },
      height: {
        98: "calc(100dvh - 32px)",
      },
    },
  },
  plugins: [],
};
