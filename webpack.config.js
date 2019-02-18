var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackManifestPlugin = require('webpack-manifest-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js'
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-eng',
      inject: true,
      template: path.resolve(__dirname,'public/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        // exclude: path.join(__dirname, './node_modules'),
      },
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        include: path.resolve(__dirname, 'src'),
      }
    ]
  },
  mode: 'development',
  performance: {
    hints: false,
  },
  // resolve: {
  //   extensions: ['.js','.jsx'],
  //   modules: [path.join(__dirname, './node_modules')],
  // }
}