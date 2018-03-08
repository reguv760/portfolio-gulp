const path = require('path');



// var paths = {
//   src: { 
//     js: 'app.js',
//     // constants: 'constants.js',
//     html: 'index.html',
//     css: 'style.css'
//   },
//   dest: {
//     js: 'dist/',
//     // constants: 'dist/',
//     html: 'dist/',
//     css: 'dist/'
//   }
// };



module.exports = {
  devtool: 'source-map',
  entry: {
    App: './src/assets/js/app.js',
    Vendor: './src/assets/js/vendor.js'
  },
  output: {
    path: path.join(__dirname, './src/assets/js'),
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
