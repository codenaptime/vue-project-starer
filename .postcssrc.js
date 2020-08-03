// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-preset-env": {
      autoprefixer: { grid: true }
    },
    "postcss-variables-rewrite": {},
    "postcss-mixins": {},
    "postcss-extend": {},
    "postcss-nested": {},
    "postcss-simple-vars": {}
  }
};
