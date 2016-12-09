const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, '/client/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/'),
        loader: 'eslint-loader',
      },
    ],
    loaders: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/'),
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
