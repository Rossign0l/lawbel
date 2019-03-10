const merge = require("webpack-merge");

const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    port: 9000
  }
});
