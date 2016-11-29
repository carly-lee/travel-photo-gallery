process.env.NODE_ENV = 'test';

var path = require('path');
var webpack = require('webpack');

var publicPath = '/';
var publicUrl = '';

module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: [ '', '.js', '.json', '.css' ],
    root: path.resolve(__dirname),
    alias: {
      app: path.join(__dirname,'src/app'),
      actions: path.join(__dirname,'src/app/actions'),
      components: path.join(__dirname,'src/app/components'),
      reducers: path.join(__dirname,'src/app/reducers'),
      utils: path.join(__dirname,'src/app/utils')
    }
  },
  module:{
    loaders:[
      {test: /\.js$/, loader: 'babel', include: path.resolve(__dirname, 'src')},
      {test: /\.css$/, loader: 'style!css?localIdentName=[local]'},
      {test: /\.json$/,loader: 'json'},
      { test: /\\.(ttf|eot|svg)$/, loader: "file-loader" }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  node: {
    __dirname: true
  }
}
