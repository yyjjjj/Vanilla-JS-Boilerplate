const { dirname } = require('path');
const path = require('path');
const WatchIgnore = require('watch-ignore-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/javascripts/index.js',
  output: {
    path: path.resolve('../server/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new WatchIgnore([path.resolve(__dirname, './node_modules/')])],
};
