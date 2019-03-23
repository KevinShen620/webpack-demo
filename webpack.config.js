const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
/**
 * @type {webpack.Configuration}
 */
const config = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: './src/index.js',
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    hash: true,
    template: './src/index.html',
    filename: path.resolve(__dirname, 'dist', 'index.html')
  })]
}

module.exports = config;