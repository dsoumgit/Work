//const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin"); 

module.exports = {
    //entry: './src/index.js',
    /*output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },*/
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.html$/,
                use: { 
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ]
  //  mode: 'development'
}