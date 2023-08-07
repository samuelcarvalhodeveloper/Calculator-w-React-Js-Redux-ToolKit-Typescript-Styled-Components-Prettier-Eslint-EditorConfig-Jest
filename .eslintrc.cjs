module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-useless-constructor": 0,
    "no-empty-function": 0,
    "no-unused-expressions": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "no-eval": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": 0,
    "react/jsx-filename-extension": 0,
    "no-undef": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
  },
};
