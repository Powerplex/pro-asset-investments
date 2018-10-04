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

    // config.resolve.alias = {
    //   components: path.resolve("./components"),
    //   styles: path.resolve("./styles"),
    //   layouts: path.resolve("./layouts")
    // };

    return config;
  }
};

module.exports = withTs(withSass(config));
