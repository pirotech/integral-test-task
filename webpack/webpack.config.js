const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const Promise = require('bluebird');

const loaders = require('./loaders.js');
const plugins = require('./plugins.js');

module.exports = () => {
  // load environment variables
  const env = dotenv.config().parsed;
  const preparedEnv = Object.keys(env).reduce((sum, item) => {
    sum[`process.env.${item}`] = JSON.stringify(env[item]);
    return sum;
  }, {});

  // configure Promise
  const devMode = process.env.NODE_ENV !== 'production';
  Promise.config({
    longStackTraces: devMode,
    warnings: devMode,
    cancellation: true
  });

  return {
    entry: './src/index.js',
    devServer: {
      port: 8888,
      contentBase: './dist',
      publicPath: '/',
      historyApiFallback: true
    },
    module: {
      rules: [loaders.JSLoader, loaders.CSSLoader, loaders.HTMLLoader, loaders.FileLoader, loaders.FontLoader]
    },
    plugins: [
      plugins.CleanWebpackPlugin,
      plugins.MiniCssExtractPlugin,
      plugins.HtmlWebPackPlugin,
      new webpack.DefinePlugin(preparedEnv)
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
