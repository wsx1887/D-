// JavaScript Document
var path=require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var config={
	entry:{
		main:'./main'
	},
	output:{
		path:path.join(__dirname,'./mydist'),
		publicPath:'/mydist/',
		filename:'main.js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
                loader: 'vue-loader'
			},
			{
				test:/\.js$/,
                loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test:/\.css$/,
				use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
        			]
            },
            {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)$/,
                loader: 'url-loader?limit=1024'
            }
		]
	},
	plugins:[
		new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: 'main.css' })
        //new webpack.DefinePlugin({
        //    'process.env': {'NODE_ENV': '"development"'}
        //})
	]
};

module.exports=config;
