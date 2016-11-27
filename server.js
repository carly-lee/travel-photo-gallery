var PORT = 3000;
var HOST = 'localhost';

var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.dev.js');

var config = Object.create(webpackConfig);
config.devtool = 'cheap-module-eval-source-map';
config.debug = true;

var server = new WebpackDevServer(webpack(config), {
  contentBase: './src',
  hot: true,
  inline: true,
  historyApiFallback: true,
  colors: true
}).listen(PORT, HOST, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://' + HOST + ':' + PORT + '/');
});
