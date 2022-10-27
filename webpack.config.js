// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/AddToCalendarButtonComponent.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'atcb.js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|assets|.github)/,
        use: 'babel-loader',
      },
    ],
  },
};
