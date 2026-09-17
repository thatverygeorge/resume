import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import * as astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";
import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2022,
        ...globals.browser,
      },
    },
    ...js.configs.recommended,
  },
  {
    rules: {
      "no-mixed-spaces-and-tabs": "off",
    },
  },
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    files: ["**/*.astro/*.js", "*.astro/*.js"],
    languageOptions: {
      parser: tsParser,
    },
  },
];
