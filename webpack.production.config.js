const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

// postcss plugins
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')

const preprocessors = [cssnext({
  browsers: ['last 2 versions'],
  cascade: false,
  features: {
    customProperties: {
      // postcss variables are defined here
      variables: {
        '--myretail-font-family': "'Helvetica Neue','Helvetica','Arial', sans-serif",
        '--myretail-secondary-font-family': "'Arial', sans-serif",
        '--myretail-light-grey': '#f7f7f7',
        '--myretail-grey': '#d3d3d3',
        '--myretail-dark-grey': '#666',
        '--myretail-black': '#333',
        '--myretail-red': '#c00',
        '--myretail-blue': '#33a1de'
      }
    }
  }
}), postcssImport({
  addDependencyTo: webpack
})]

module.exports = {
  entry: [
    './src/main.js'
  ],
  node: {
    Buffer: false
  },
  performance: {
    hints: false
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: preprocessors
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: false,
      mangle: true,
      minimize: true
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules)/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      }
    ]
  }
}
