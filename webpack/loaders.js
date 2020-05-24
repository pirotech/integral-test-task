const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const JSLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
};

const CSSLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: devMode ? 'style-loader' : _MiniCssExtractPlugin.loader
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: devMode
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: './postcss.config.js'
        },
        sourceMap: devMode
      }
    },
    {
      loader: 'sass-loader',
      options: {
        prependData: '@import "./src/shared/styles/_variables.scss";' + '@import "./src/shared/styles/_mixins.scss";'
      }
    }
  ]
};

const HTMLLoader = {
  test: /\.(html|htm)$/,
  use: [
    {
      loader: 'html-loader'
    }
  ]
};

const FileLoader = {
  test: /\.(svg|gif|png|jpg)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'files/[name].[ext]'
    }
  }
};

const FontLoader = {
  test: /\.(woff(2)?|eot|ttf|otf)(\?.*$|$)/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }
  ]
};

module.exports = {
  JSLoader,
  CSSLoader,
  HTMLLoader,
  FileLoader,
  FontLoader
};
