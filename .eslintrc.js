module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": "error",
    quotes: [0, "single"],
    semi: 0,
    "space-before-function-paren": 0
  }
};
