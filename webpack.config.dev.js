const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode: 'development',
    devtool: 'source-map',
    // watch: true,
    resolve: {
        extensions: ['.js'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/css/')
        }
    },
    stats: {
        children: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|.styl$/i,
                use: [miniCssExtractPlugin.loader,
                'css-loader',
                'stylus-loader'
                ],
            },
            {
                test: /\.png|.jpg/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[contenthash].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "../assets/fonts/",
                        esModule: false,
                    },
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: './index.html'
        }),
        new htmlWebpackPlugin({
            inject: true,
            template: './src/blogs.html',
            filename: './blogs.html'
        }),
        new htmlWebpackPlugin({
            inject: true,
            template: './src/miBlog.html',
            filename: './miBlog.html'
        }),
        new htmlWebpackPlugin({
            inject: true,
            template: './src/miPerfil.html',
            filename: './miPerfil.html'
        }),
        new miniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new copyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/imgs"),
                    to: "assets/imgs"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/icons"),
                    to: "assets/icons"
                },
            ]
        }),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3006,
    },
}