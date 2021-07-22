const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    publicPath: "auto",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  optimization: {
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
            warnings: false
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "container",
      remotes: {
        app_a: 'app_a@http://localhost:3001/remote-a.js',
        app_b: 'app_b@http://localhost:3001/remote-b.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    })
  ]
}
