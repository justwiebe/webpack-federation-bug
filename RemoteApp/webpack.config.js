const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {},
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
  },

  optimization: {
    concatenateModules: false,
    minimize: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
            warnings: false
          }
        }
      })
    ],
    splitChunks: {
      minSize: 0
    }
  },

  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'app_a',
      filename: 'remote-a.js',
      exposes: {
        './RemoteA': './src/remote-a/index'
      }
    }),
    new webpack.container.ModuleFederationPlugin({
      name: 'app_b',
      filename: 'remote-b.js',
      exposes: {
        './RemoteB': './src/remote-b/index'
      }
    })
  ]
}
