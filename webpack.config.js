const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = require('./config')

const filename = path.resolve(__dirname, 'dist/index.html')
const template = path.resolve(__dirname, 'public', 'index.html')
const contentBase = path.resolve(__dirname, 'dist')

const props = {
  webpack,
  HtmlWebpackPlugin,
  filename,
  template,
  contentBase,
}

// Use development config for dev-server and production config for building
module.exports = process.env.NODE_ENV
  ? { ...webpackConfig.common, ...webpackConfig.development(props) }
  : { ...webpackConfig.common, ...webpackConfig.production }
