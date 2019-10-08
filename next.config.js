/**
 * @file Configuring Next.
 */

/* eslint-disable */
const withSass = require("@zeit/next-sass");

/**
 * A hack to avoid errors from improperly configured options
 * From https://github.com/zeit/next-plugins/issues/392#issuecomment-475845330
 */
function HACK_removeMinimizeOptionFromCssLoaders(config) {
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === "css-loader" && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withSass({
  webpack(config) {
    HACK_removeMinimizeOptionFromCssLoaders(config);
    return config;
  }
});
