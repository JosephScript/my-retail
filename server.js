const express = require('express')
const http = require('http')
const item = require('./data/item-data.json')

const app = express()

const port = process.env.PORT || 3000
http.createServer(app).listen(port)
console.log('http server started on port ' + port)

const config = require('./webpack.config.js')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

// API
app.use('/api/*?', function (req, res, next) {
  res.send(item)
})
