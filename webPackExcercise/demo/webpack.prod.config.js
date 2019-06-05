var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');

//清空插件
webpackBaseConfig.plugins = [];
module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: './mydist/',
        filename:'[name].[chunkhash].js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        
        new HtmlwebpackPlugin({
            filename: '../index.prod.html',
            template: './index.html',
            inject:false
        })
    ],
    optimization: {
        minimize: true
    }
});