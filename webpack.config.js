const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// npx webpack --config webpack.config.js
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    // tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
    devServer: {
        contentBase: './dist',
        // You can use the CLI to modify the webpack-dev-server configuration with the following command: webpack-dev-server --hotOnly.
        hot: true
    },
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};