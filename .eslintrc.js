module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true
  },
  extends: [
    "react-app",
    "standard",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "prettier",
  ],
  "parserOptions": {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
    }
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 100,
        "singleQuote": true
      }
    ],
    'no-useless-escape': 0,
    'no-console': "error",
    'prefer-promise-reject-errors': 0,
    'generator-star-spacing': 'off',
    'promise/param-names': 0,
    'react-hooks/rules-of-hooks': 0,
    'no-return-await': 0,
    'default-case': "error",
    'lines-between-class-members': 0,
    'no-script-url': 0,
    'no-eval': 0
  }
};
