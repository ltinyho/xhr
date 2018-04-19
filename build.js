const path    = require('path');
const webpack = require('webpack');
const config  = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/xhr.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'xhr.min.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};

webpack(config, (err, stats) => {
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n');
});
