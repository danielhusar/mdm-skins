var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var postcssImport = require('postcss-import');
var calc = require('postcss-calc');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/index.js',

  output: {
    path: './static/assets/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
      },
      {
        test: /\.jsx*$/,
        exclude: 'node_modules',
        loader: 'babel',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name]-[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new ExtractTextPlugin('app.css'),
  ],

  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }), // Must be first item in list
      precss,
      autoprefixer,
      calc
    ];
  }
};
