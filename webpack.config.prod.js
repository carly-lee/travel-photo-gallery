process.env.NODE_ENV = 'production';

var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var publicPath = '/';
var publicUrl = '';

module.exports = {
  entry:[
    './src/app/index.js'
  ],
  output:{
    path: path.join(__dirname, '/build/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['','.js', '.json', '.css'],
    root: path.resolve(__dirname),
    alias: {
      app: 'src/app',
      actions: 'src/app/actions',
      components: 'src/app/components',
      reducers: 'src/app/reducers',
      utils: 'src/app/utils'
    }
  },
  plugins:[
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('main.css'),
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{from: 'src/index.html', to: 'index.html'}]),
    new CopyWebpackPlugin([{from: 'src/images/', to: 'images/'}]),
    new CopyWebpackPlugin([{from: 'src/data/', to: 'data/'}])
  ],
  module:{
    preLoaders: [
      {test: /\.js$/,loader: 'eslint',include: path.resolve(__dirname, 'src')}
    ],
    loaders:[
      {test: /\.js$/, loader: 'babel', include:path.resolve(__dirname, 'src')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&-autoprefixer!postcss')},
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
