const withSass = require("@zeit/next-sass");
const withTs = require("@zeit/next-typescript");
const path = require("path");

const config = {
  cssModules: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
};

module.exports = withTs(withSass(config));
