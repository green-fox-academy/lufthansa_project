'use strict';

var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnext = require('cssnext');
var css = require('./dest/style.css');

module.exports = {
  entry: './client/App.js',
  output: {
    filename: 'public/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: function () {
    return [autoprefixer, precss, cssnext];
  },
};
