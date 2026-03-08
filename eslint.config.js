import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import tailwind from "eslint-plugin-tailwindcss";
export default [
  ...tailwind.configs["flat/recommended"],
  { ignores: ["dist"] },
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
