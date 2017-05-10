'use strict';

module.exports = {
  entry: './client/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  output: {
    path: __dirname + '/in-memory',
    filename: 'bundle.js',
    publicPath: '/in-memory'
  },
  devtool: 'inline-source-map'
};
