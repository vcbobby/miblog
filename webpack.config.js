const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
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
        new miniCssExtractPlugin(),
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
        })
    ]
}