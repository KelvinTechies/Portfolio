import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    sourceType: "module",
    globals: {
      ...globals.browser,
      jQuery: "readonly",
      WOW: "readonly",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // Disable the rule if using React 17+
  },
  plugins: {
    react: pluginReact,
  },
};
