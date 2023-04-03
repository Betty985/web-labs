const path = require('path');
const noConsoleLogPlugin=require('./plugins/noConsoleLogPlugin')
module.exports = {
  entry: './plugin/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new noConsoleLogPlugin()
  ]
};