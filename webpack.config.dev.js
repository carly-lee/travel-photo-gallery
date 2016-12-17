process.env.NODE_ENV = 'development';

var path = require( 'path' );
var webpack = require( 'webpack' );
var atImport = require( 'postcss-import' );
var cssnext = require( 'postcss-cssnext' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

var publicPath = '/';

module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/dev-server',
		'./src/app/index.dev.js',
	],
	output:{
		path: path.join( __dirname, '/build/' ),
		pathinfo: true,
		publicPath: publicPath,
		filename: 'bundle.js',
	},
	resolve: {
		extensions: [ '', '.js', '.json', '.css' ],
		root: path.resolve( __dirname ),
		alias: {
			'react/lib/ReactMount': 'react-dom/lib/ReactMount', //for react-hot-loader
			app: path.join( __dirname,'src/app' ),
			store: path.join( __dirname,'src/app/store/dev' ),
			actions: path.join( __dirname,'src/app/actions' ),
			reducers: path.join( __dirname,'src/app/reducers' ),
			containers: path.join( __dirname,'src/app/containers' ),
			components: path.join( __dirname,'src/app/components' ),
			utils: path.join( __dirname,'src/app/utils' ),
		},
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify( 'development' ),
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin( 'main.css', { allChunks: true }),
	],
	module:{
		preLoaders: [
      { test: /\.js$/,loader: 'eslint',include: path.resolve( __dirname, 'src' ) },
		],
		loaders:[
      { test: /\.js$/, loaders: [ 'react-hot','babel' ], include: path.resolve( __dirname, 'src' ) },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss', include: path.resolve( __dirname, 'src' ) },
      { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,loader: 'file?name=[name].[ext]' },
      { test: /\.json$/,loader: 'json' },
      { test: /\.svg$/,loaders: [ 'react-svgdom', 'svgo' ]},
	  ],
	},
	postcss: [
		atImport({ path: [ '.', './src', 'node_modules' ]}),
		cssnext(),
	],
	node: {
		__dirname: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
};
