// webpack v4
const path = require('path');

// Sass
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './_src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: "/assets/styles.css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './_src/index.html',
      filename: 'index.html'
    })
  ]
};