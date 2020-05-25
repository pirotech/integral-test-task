const path = require('path');
const Dotenv = require('dotenv-webpack');

const loaders = require('./loaders.js');
const plugins = require('./plugins.js');

module.exports = () => {
  return {
    entry: './src/index.jsx',
    devServer: {
      disableHostCheck: true,
      port: 8888,
      contentBase: './dist',
      publicPath: '/',
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    module: {
      rules: [loaders.JSLoader, loaders.CSSLoader, loaders.HTMLLoader, loaders.FileLoader, loaders.FontLoader]
    },
    plugins: [
      plugins.CleanWebpackPlugin,
      plugins.MiniCssExtractPlugin,
      plugins.HtmlWebPackPlugin,
      new Dotenv()
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].bundle.js'
    }
  };
};
