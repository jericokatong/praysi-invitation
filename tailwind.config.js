/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        alegreyaRegular: ["AlegreyaRegular"],
        dancingScriptRegular: ["DancingScriptRegular"],
        robotoRegular: ["RobotoRegular"],
        robotoSlabRegular: ["RobotoSlabRegular"],
      },
    },
  },
  plugins: [],
};
