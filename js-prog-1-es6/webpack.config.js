/* global require module __dirname */
let path = require('path');

let conf = {
  entry: './es6/scripts.js',
  output: {
    path: path.resolve(__dirname, './js'), // abosulte path needed
    filename: 'main.js', // output filename
    publicPath: 'js/', // just needed
  },
  devServer: {
    overlay: true, // fatal error overlay app screen
  },
  module: {
    rules: [
      {
        test: /\.js$/, // turn reg true for .js files
        loader: 'babel-loader',
        // exclude: '/node_modules/'
      },
    ],
  },
};

module.exports = (env, options) => {
  conf.devtool =
    options.mode === 'production' ? false : 'eval-cheap-module-source-map'; // config custom source maps, see docs https://v4.webpack.js.org/configuration/devtool/

  return conf;
};
