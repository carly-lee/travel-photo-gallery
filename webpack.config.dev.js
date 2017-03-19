const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/app/index.dev.js',
	output:{
		path: path.resolve( __dirname, 'build' ),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [".js", ".json", ".css"],
		alias: {
			app: path.resolve( __dirname, 'src/app/' ),
			store: path.resolve( __dirname, 'src/app/store/dev/' ),
			actions: path.resolve( __dirname, 'src/app/actions/' ),
			reducers: path.resolve( __dirname, 'src/app/reducers/' ),
			containers: path.resolve( __dirname, 'src/app/containers/' ),
			components: path.resolve( __dirname, 'src/app/components/' ),
			utils: path.resolve( __dirname, 'src/app/utils/' )
		},
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify( 'development' ),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
      title: 'My travel photo gallery',
			hash: true,
      template: './src/index.html'
    }),
		 new ExtractTextPlugin({
	   filename: "main.css",
	   disable: false,
	   allChunks: true
		})
	],
	module:{
		rules:[
      { test: /\.js$/,
				use: [ 'react-hot-loader', 'babel-loader' ],
				include: path.resolve( __dirname, 'src' ) },
			{ test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
							importLoaders: 1,
              modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]' 
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
				 }]
			},
      { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: 'file-loader?name=[name].[ext]' },
      { test: /\.svg$/,
				use: [ 'react-svgdom-loader', 'svgo-loader' ]}
	  ],
	},
	devServer: {
		contentBase: path.join(__dirname, "src"),
		compress: true,
		historyApiFallback: true,
		open: true,
		hot: true,
		stats: "errors-only",
		watchContentBase: true,
		port: 3000
	}
};

module.exports = config;