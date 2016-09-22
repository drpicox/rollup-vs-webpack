'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "../source/entry.js",
    output: {
        path: __dirname,
        filename: "../webpack-bundle.js"
    },
    /*
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a valid name to reference
        }
      ]
    },
    */
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: true
        },
        output: {
          comments: false
        },
        sourceMap: false
      })
    ]
};