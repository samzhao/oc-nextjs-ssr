const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  target: "serverless",
  webpack(config) {
    // oc-client-node uses `fs` which breaks Webpack build
    // this fixes that
    config.node = {
      fs: "empty"
    };

    // This gets rid of the following warning:
    // require.extensions is not supported by webpack. Use a loader instead.
    Object.assign(config.resolve.alias, {
      "handlebars/runtime": "handlebars/dist/cjs/handlebars.runtime",
      handlebars: "handlebars/dist/cjs/handlebars.runtime"
    });

    return config;
  }
});
