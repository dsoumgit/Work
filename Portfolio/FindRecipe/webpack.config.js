const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
        // need to use this because of some features such as promises or async/await cannot convert to ES5 
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 9000
    },
    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'    // webpack copies this template to dist folder 
        })
    ], 
    module: {
        rules: [
            {
                test: '/\.js$/',    // files end with .js 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}