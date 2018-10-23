const { resolve } = require('path');

const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  mode: 'development',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './main.js'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },

  context: resolve(__dirname, 'app'),

  devServer: {
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /config\/Root\.js$/,
        loader: 'string-replace-loader',
        options: {
          search: 'Hello',
          replace: 'Tomer',
        }
      }
    ]
  },

  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};

module.exports = config;
