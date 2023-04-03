const path = require('path');
module.exports = {
  entry: './loader/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.zyh$/, use:[{
        loader:path.resolve(__dirname, './src/txtloader.js')
      }]},
      { test: /\.svg$/, use:[{
        loader:path.resolve(__dirname, './src/svgloader.js')
      }]},
    ],
  },
};