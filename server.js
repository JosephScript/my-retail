const express = require('express')
const http = require('http')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000
http.createServer(app).listen(port)
console.log('http server started on port ' + port)

const config = require('./webpack.config.js')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

  // webpack serves all files from memory
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
app.use('/api/*', function (req, res, next) {
  res.send('Data goes here')
})

app.get('/', function response (req, res, next) {
  // webpack routes are served slightly differently (from memory)
  middleware.fileSystem.readFile(path.join(__dirname, 'dist/index.html'), (err, result) => {
    if (err) {
      return next(err)
    } else {
      res.write(result)
      res.end()
    }
  })
})
