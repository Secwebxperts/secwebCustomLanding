// @ts-check
/**
 * @typedef {import('prettier').Config} Config
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cva"],
  tailwindStylesheet: "./src/styles/globals.css",
};

module.exports = config;
