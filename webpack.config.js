const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

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
        '--myretail-light-grey': '#666',
        '--myretail-dark-grey': '#333'
      }
    }
  }
}), postcssImport({
  addDependencyTo: webpack
})]

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin()
    // do not emit compiled assets that include errors
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true
    // enable HMR on the server
  },
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
