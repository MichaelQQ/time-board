const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    index: './index.js'
  },
  output: {
    filename: 'bundle.js',
    // the output bundle
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    // enable HMR on the server
    contentBase: resolve(__dirname, './'),
    // match the output path
    publicPath: '/'
    // match the output `publicPath`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader?modules', ],
      // },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
  ],
};