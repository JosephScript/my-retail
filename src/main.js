import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/itemListing.jsx'
import './base.css'
import 'whatwg-fetch'
import Promise from 'promise-polyfill'
import itemService from './services/item.js'

if (!window.Promise) {
  window.Promise = Promise
}

// NOTE: Item ID would normally come from query string or param on page load
itemService.getItem(0).then(item => {
  render(App, item)
  if (module.hot) module.hot.accept('./pages/itemListing.jsx', () => render(App, item))
})

const rootEl = document.getElementById('my-retail')
const render = (Component, item) =>
  ReactDOM.render(
    <AppContainer>
      <Component item={item} />
    </AppContainer>,
    rootEl
  )
