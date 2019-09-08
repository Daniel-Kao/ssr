const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, '../src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
};
