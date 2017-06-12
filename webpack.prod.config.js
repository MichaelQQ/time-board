const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    js: './index.js',
    vendor: ['react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: [ 'babel-loader', ],
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader?modules', ],
      // },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  ],
};
