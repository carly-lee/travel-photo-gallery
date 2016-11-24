process.env.NODE_ENV = 'development';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/index.js'
  ],
  output:{
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css', {allChunks: true})
  ],
  module:{
    preLoaders: [
      {test: /\.js$/,loader: 'eslint',include: 'src'}
    ],
    loaders:[
      {test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.resolve(__dirname, 'src')},
      {test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'},
      {test: /\.json$/,loader: 'json'},
      {test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,loader: 'file'}
    ]
  },
  resolve: {
    extensions: ['','.js', '.json', '.css'],
    root: path.resolve(__dirname),
    alias: {
      'react/lib/ReactMount': 'react-dom/lib/ReactMount', //for react-hot-loader
      app: 'src/app',
      actions: 'src/app/actions',
      components: 'src/app/components',
      reducers: 'src/app/reducers',
      utils: 'src/app/utils'
    }
  },
  postcss: [
    require('postcss-smart-import')(),
    require('precss')(),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
