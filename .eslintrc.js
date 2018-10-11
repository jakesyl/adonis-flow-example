module.exports = {
  "env": {
    "node": true
  },
  "extends": ["airbnb-base", 'plugin:flowtype/recommended'],
  "plugins": [
    'import',
    'flowtype',
  ],
  "parser": 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": false
    }
  },
  "rules": {
    "strict": "off",
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", { "anonymous": "never", "named": "always" }],
    "class-methods-use-this": "off",
    "object-curly-newline": ["error", { "multiline": true }],
    "global-require": "off",
    "arrow-parens": ["error", "as-needed"],
    "no-param-reassign": ["error", { "props": false }],
    'max-len': ["error", { "comments": 9999 }]
  },
  "globals": {
    "use": true
  }
};
