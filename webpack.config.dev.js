process.env.NODE_ENV = 'development';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var publicPath = '/';
var publicUrl = '';

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/index.js'
  ],
  output:{
    path: path.join(__dirname, '/build/'),
    publicPath: publicPath,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.json', '.css' ],
    root: path.resolve(__dirname),
    alias: {
      'react/lib/ReactMount': 'react-dom/lib/ReactMount', //for react-hot-loader
      app: path.join(__dirname,'src/app'),
      actions: path.join(__dirname,'src/app/actions'),
      components: path.join(__dirname,'src/app/components'),
      reducers: path.join(__dirname,'src/app/reducers'),
      utils: path.join(__dirname,'src/app/utils')
    }
  },
  plugins:[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css', {allChunks: true})
  ],
  module:{
    preLoaders: [
      {test: /\.js$/,loader: 'eslint',include: path.resolve(__dirname, 'src')}
    ],
    loaders:[
      {test: /\.js$/, loader: 'babel', include: path.resolve(__dirname, 'src')},
      {test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'},
      {test: /\.json$/,loader: 'json'},
      {test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,loader: 'file'}
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
