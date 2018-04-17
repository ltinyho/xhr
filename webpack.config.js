const path = require('path');
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/xhr.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "xhr.min.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    optimization: {
        minimize: true
    },

}