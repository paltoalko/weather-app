const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'index.html', // output file
    }),
],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
   ],
 },
};