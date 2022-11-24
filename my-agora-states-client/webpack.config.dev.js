// const { merge } = require("webpack-merge");
// const baseConfig = require("./webpack.config");

// module.exports = merge(baseConfig, {
//   mode: "development",
// });

const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"),
    },
    port: 3003,
    hot: true,
  },
  plugins: [new ReactRefreshPlugin()],
});
