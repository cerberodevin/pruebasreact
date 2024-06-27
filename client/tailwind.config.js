/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "COLOR-1": "#1E293B",
      "COLOR-2": "#9BA9BD",
      "COLOR-4": "#9BA9BD",
      "COLOR-5": "#E8E8E8",
      "COLOR-6": "#D0D0D0",
    },
    fontFamily: {
      "rubik-regular": ["Rubik", "sans-serif"],
      "rubik-medium": ["Rubik", "sans-serif", ""],
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "COLOR-3":
          "linear-gradient(90deg, #7e3289, #3577bb, #3faa35, #f6e722, #e20613)",
      },
    },
  },
  plugins: [],
};
