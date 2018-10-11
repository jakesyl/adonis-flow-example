module.exports = {
  "extends": ["airbnb-base", 'plugin:flowtype/recommended'],
  plugins: [
    'import',
    'flowtype',
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
};
