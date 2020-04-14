const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let isProd = process.env.NODE_ENV === 'production';

let cssDev = ['style-loader', 'css-loader', 'sass-loader'];
// let cssProd = ExtractTextPlugin.extract({
//     fallback: 'style-loader',
//     use: ['css-loader', 'sass-loader']
// });
// let cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: './examples/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/src/templates/",
        filename: '[name].bundle.js'
    },
    node: {
        __filename: true,
        __dirname: true,
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: cssDev
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                //use: 'file-loader?name=[hash:6].[ext]&outputPath=images/',
                use: [
                    // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
                    // 'file-loader?name=[name].[ext]&outputPath=images/',
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        compress: true,
        port: 8000,
        stats: 'errors-only',
        // open: true
    },
    externals: {},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'comments',
            // minify: {
            // 	collapseWhitespace: true
            // },
            hash: true,
            // filename: './../index.html',
            template: './examples/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "app.css",
            // disable: !isProd,
            // allChunks: true
        })
    ]
};
