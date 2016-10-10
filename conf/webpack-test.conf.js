module.exports = {
    module: {
        preLoaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }
        ],

        loaders: [
        {
            test: /.json$/,
            loaders: [
                'json'
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [
                'ng-annotate',
                'babel'
            ]
        },
        {
            test: /.html$/,
            loaders: [
                'html'
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|.*\.spec\.js)/,
            loader: 'isparta'
        },
        {
            test: /\.(ttf|eot|svg|jpg|gif|png|webp|woff|woff2|otf)([\?]?.*)$/,
            loader: 'file-loader'
        }
        ]
    },
    plugins: [],
    debug: true,
    devtool: 'cheap-module-eval-source-map'
};
