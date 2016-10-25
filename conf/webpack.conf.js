/* global process, __dirname */
const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        // When an npm module is linked, this preLoader causes the webpack output of the module to
        // be linted, throwing tons of errors
        preLoaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve('src'),
                ],
                loader: 'eslint',
            },
        ],
        loaders: [
            {
                test: /.json$/,
                loaders: [
                    'json',
                ],
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style',
                    'css',
                    'sass',
                    'postcss',
                ],
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve('src'),
                ],
                loaders: [
                    'ng-annotate',
                    'babel',
                ],
            },
            {
                test: /.html$/,
                loaders: [
                    'html',
                ],
            },
            {
                test: /\.(ttf|eot|svg|jpg|gif|png|webp|woff|woff2|otf)([\?]?.*)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: conf.path.src('index.html'),
            inject: true,
        }),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/),
    ],
    postcss: () => [autoprefixer],
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(process.cwd(), conf.paths.tmp),
        filename: 'index.js',
    },
    entry: `./${conf.path.src('index')}`,
};
