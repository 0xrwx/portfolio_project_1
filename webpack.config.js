var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/'),
    clean: true
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: 'src/index.html',
      filename: 'index.html',
      inject: false
  } )
],
}