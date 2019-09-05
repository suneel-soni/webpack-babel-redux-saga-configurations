const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("babel-polyfill");

module.exports = ({ mode } = { mode: "production" }) => {
  return {
    mode,
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
      filename: "bundled.js"
    },
    module: {
      rules: [
        {
          test: /\.jpe?g|png$/,
          exclude: /node_modules/,
          loader: ["url-loader", "file-loader"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [require.resolve("style-loader"), require.resolve("css-loader")]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
    ]
  }
};