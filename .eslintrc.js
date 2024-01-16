module.exports = {
  extends: ["plugin:astro/recommended", "plugin:jsx-a11y/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
};
