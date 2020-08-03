// https://eslint.org/docs/user-guide/configuring

module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018
  },
  "env": {
    "browser": true
  },
  "extends": [
    "plugin:vue/recommended",
    'eslint:recommended',
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:vue-a11y/recommended"
  ],
  "plugins": [
    "prettier",
    "vue",
    "vue-a11y"
  ],
  "rules": {
    "no-unused-vars": 2,
    "no-var": "error",
    "prefer-const": [
      2,
      {
        "destructuring": "all",
      }
    ],
    "prefer-object-spread": 2,
    "prefer-arrow-callback": 2,
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-console": 1,
    "no-alert": 1,
    "no-unused-expressions": 2,
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-useless-rename": 2,
    "eqeqeq": [
      2,
      "smart"
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidExplicitReturnArrows": true
      }
    ],
    "prefer-template": "error",
    "vue/require-default-prop": 0,
    "vue/attribute-hyphenation": 0,
    "prettier/prettier": [
      2,
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "tabWidth": 2,
        "printWidth": 120,
        "jsxBracketSameLine": true,
        "jsxSingleQuote": true,
        "htmlWhitespaceSensitivity": "ignore",
        "arrowParens": "avoid",
        "endOfLine": "auto"
      }
    ]
  }
};
