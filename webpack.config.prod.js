const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

const config = {
	entry: './src/app/index.prod.js',
	output:{
		path: path.resolve( __dirname, 'build' ),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [ '.js', '.json', '.css' ],
		alias: {
			app: path.resolve( __dirname,'src/app' ),
			store: path.resolve( __dirname,'src/app/store/prod' ),
			actions: path.resolve( __dirname,'src/app/actions' ),
			reducers: path.resolve( __dirname,'src/app/reducers' ),
			containers: path.resolve( __dirname,'src/app/containers' ),
			components: path.resolve( __dirname,'src/app/components' ),
			utils: path.resolve( __dirname,'src/app/utils' ),
		},
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify( 'production' ),
	    },
	  }),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true, // React doesn't support IE8
				warnings: false,
	    },
			mangle: {
				screw_ie8: true,
	    },
			output: {
				comments: false,
				screw_ie8: true,
			},
		}),
		new HtmlWebpackPlugin({
      title: 'My travel photo gallery',
			hash: true,
      template: './src/index.html'
    }),
		 new ExtractTextPlugin({
	   filename: "main.css",
	   disable: false,
	   allChunks: true
		}),
		new CleanWebpackPlugin(['build']),
		new CopyWebpackPlugin([{ from: 'src/index.html', to: 'index.html' }]),
		new CopyWebpackPlugin([{ from: 'src/images/', to: 'images/' }]),
		new CopyWebpackPlugin([{ from: 'src/data/', to: 'data/' }]),
	],
	module:{
		rules:[
      { test: /\.js$/,
				use: [ 'react-hot-loader', 'babel-loader' ],
				include: path.resolve( __dirname, 'src' ) },
			{ test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true,
							}
						},
						{ loader: 'postcss-loader',
							options: {
									plugins: function () {
										return [
											require('postcss-import'),
											require('postcss-cssnext')
										];
									}
								}
					}],
					publicPath: "/build"
				})
			},
      { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: 'file-loader?name=[name].[ext]' },
      { test: /\.svg$/,
				use: [ 'react-svgdom-loader', 'svgo-loader' ]}
	  ],
	}
};

module.exports = config;