var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client', './client/index.js',],

  output: {
    path: __dirname + '/assets/',
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss?extension=scss'),
      },
      {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
        query: {
          presets: ['react-hmre'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name]-[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
    //,
    // preLoaders: [
    //   {
    //     test: /\.jsx*$/,
    //     exclude: [/node_modules/, /.+\.config.js/],
    //     loader: 'eslint-loader',
    //   }
    // ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.css'),
  ],

  eslint: {
    quiet: true
  },

  postcss: function () {
    return [precss({
      'import': {
        'extension': 'scss'
      }
    }), autoprefixer];
  }
};
