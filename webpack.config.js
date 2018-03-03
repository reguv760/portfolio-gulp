const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    App: './src/assets/js/app.js',
    Vendor: './src/assets/js/vendor.js'
  },
  output: {
    path: path.join(__dirname, './src/temp/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
