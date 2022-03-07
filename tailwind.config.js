module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    colors: {
      "hover-light-blue": "#D8E7EF",
      "light-blue": "#F3F6F8",
      black: "black",
      transparent: "transparent",
      blue: "#00468E",
      "gray-subtitle": "#484848",
      "gray-nav": "#4B4A4A",
      "gray-info": "#6C6C6C",
      "gray-sub-logo-title": "#666666",
      "gray-unit": "#3C3C3C",
      red: "#B50812",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: "#8492a6",
      white: "white",
      "gray-light": "#d3dce6",
      footer: "#f0f0f0",
      "footer-icon-darker": "#515964",
      "footer-icon": "#979CA3",
      "footer-text": "#4d5864",
    },

    fontFamily: {
      spoqa: ["Spoqa Han Sans ", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s 0.5s ease-out both",
        "fade-in-up-2": "fade-in-up 0.5s 0.6s ease-out both",
        "fade-in-up-3": "fade-in-up 0.5s 1s  ease-out both",
        "fade-in-up-1": "fade-in-up 0.5s 0.2s ease-out both",

        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out both",
        "fade-out-up": "0.5s fade-out-up 0.5s ease-out",
      },
      spacing: { content: "1.625rem" },
      fontSize: {
        "7xl": "5rem",
        title: "1.688rem",
        subtitle: "1.34rem",
        table: "0.969rem",
        "2xs": "0.5rem",
      },
      maxWidth: {
        "9xl": "70rem",
      },
      borderRadius: {
        "4xl": "2.2rem",
      },
    },
  },
};

console.log(JSON.stringify(module.exports));
