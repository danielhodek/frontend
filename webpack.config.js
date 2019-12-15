const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/scripts/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'frontend.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  watch: true
}