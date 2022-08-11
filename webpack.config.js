var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/'),
    clean: true
  }
}