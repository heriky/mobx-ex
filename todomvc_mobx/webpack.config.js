var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin') ;

var APP_PATH = path.resolve(__dirname, './src') ;
var BUILD_PATH = path.resolve(__dirname, './resources/dist') ;
var STATIC_RES = path.resolve(__dirname, './resources/static') ;

var ExtractTextPlugin = require('extract-text-webpack-plugin') ;
var commonExtract = new ExtractTextPlugin('common.css', {chunck: true}) ;

module.exports = {
	name: 'client',
	target: 'web',
	entry: [
		path.resolve(APP_PATH, './client'),
		'webpack-hot-middleware/client',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server'
	],
	output:{
		path: BUILD_PATH,
		filename: 'bundle.js',
		publicPath: '/static'
	},
	plugins:[ new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(), commonExtract,
		 new HtmlwebpackPlugin({
		 	template: './index.html'
		 })
   ],

	devtool: 'eval-source-map',
	resolve:{
		extensions: ['', '.js', '.jsx']
	},
	externals: {
		jquery: "jQuery" // 从全局（或者script标签）中引入到模块中来
	}
	,
	postcss: function () {
	    return [require('autoprefixer'), require('precss')];
	},
	module:{
		loaders:[{
			test: /\.(js|jsx)$/,
			loader: 'babel-loader',
			include: APP_PATH
		},{
			test: /\.(scss|css)$/,
			loader: commonExtract.extract('style',['css','postcss','sass']),
			// include: STATIC_RES+'/css'
		},{
			test: /\.(png|jpe?g|gif)$/,
			loader: 'url-loader?limit=50000&name=imgs/[name].[ext]'
		},{
			test: /\.(woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=50000&name=fonts/[name].[ext]'
		}]
	}
}