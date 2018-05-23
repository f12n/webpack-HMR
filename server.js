const express = require('express');
const webpack = require('webpack');

const app = express();
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

// Serve the files on port 3000.
app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n');
});