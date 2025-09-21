// eslint.config.mjs
import js from "@eslint/js";
import next from "eslint-config-next";

export default [
  js.configs.recommended,
  ...next(["core-web-vitals"]), // ✅ loads Next.js recommended rules
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];
