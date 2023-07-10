const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        static: {
            directory: './build'
        },
        port: 8080
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'estilo.css'}),
        new CopyWebpackPlugin({
            patterns: [
                {from: '**/*.html', context: 'src'},
                {from: 'imgs/**/*.*', context: 'src'}
            ],    
    })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', //adiciona CSS a DOM 
                    'css-loader', //interpreta @import, url()..
                    'sass-loader'
                ]
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },{
                test: /.(ttf|otf|eot|svg|woff(2))$/,
                use: ['file-loader']
            }
        ]
    }
}