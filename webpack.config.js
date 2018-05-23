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
    entry: [
        // connects to the server to receive notifications when the bundle rebuilds 
        // and then updates your client bundle accordingly.
        'webpack-hot-middleware/client',
        './src/index.js',
    ],
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
        // NamedModulesPlugin to make it easier to see which dependencies are being patched
        new webpack.NamedModulesPlugin(),

        /**
         * Occurence ensures consistent build hashes,
         * hot module replacement is somewhat self-explanatory,
         * no errors is used to handle errors more cleanly.
         */
        // OccurenceOrderPlugin is needed for webpack 1.x only
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ]
};