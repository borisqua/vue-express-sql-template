module.exports = {
  env: {
    es6: true,
    node: true
  },
  // "extends": "eslint:recommended", //it's recommended to uncomment for browser script code
  rules: {
    "no-console":  "error" ,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 1
      }
    ]
  }
};