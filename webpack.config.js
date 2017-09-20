var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./client.js",
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015']
              }
            }
        ]
    }
}