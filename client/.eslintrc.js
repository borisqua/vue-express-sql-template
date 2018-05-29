// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    // 'plugin:vue/essential',
    // 'eslint:recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'
  ],
  // required to lint *.vue files
  plugins: [ 'vue' ],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": 'off',
    // 'no-console':  "error", //uncomment for production
    // "quotes": ["error", "single"],
    "semi": 0,
    "linebreak-style": 0,
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 1
      }],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};

