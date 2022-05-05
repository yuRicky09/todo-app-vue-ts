const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "light-gray": "hsl(0, 0%, 98%)",
        "light-gray-blue": "hsl(236, 33%, 92%)",
        "light-gray-blue-2": "hsl(233, 11%, 84%)",
        "light-dark-gray-blue": "hsl(235, 19%, 35%)",
        "light-very-dark-gray-blue": "hsl(235, 19%, 35%)",
        "dark-dark-blue": "hsl(235, 21%, 11%)",
        "dark-very-dark-blue": "hsl(235, 24%, 19%)",
        "dark-light-gray-blue": "hsl(234, 39%, 85%)",
        "dark-light-gray-blue-hover": "hsl(236, 33%, 92%)",
        "dark-gray-blue": "hsl(234, 11%, 52%)",
        "dark-very-gray-blue": "hsl(233, 14%, 35%)",
        "dark-very-gray-blue-2": "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        Josefin: ["Josefin Sans", defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  },
};
