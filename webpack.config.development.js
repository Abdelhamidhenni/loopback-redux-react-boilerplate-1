const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/',
  },
  eslint: {
    configFile: './.eslintrc',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
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
