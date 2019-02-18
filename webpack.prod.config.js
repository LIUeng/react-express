var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-eng',
      inject: true,
      template: path.resolve(__dirname,'public/index.html')
    }),
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
  mode: 'production',
  performance: {
    hints: false,
  },
  // resolve: {
  //   extension: ['.js','.jsx'],
  //   modules: [path.join(__dirname, './node_modules')],
  // }
}