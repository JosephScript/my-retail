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

itemService.getItem(0).then(item => {
  render(App, item)
  if (module.hot) module.hot.accept('./pages/itemListing.jsx', () => render(App, item))
})

const rootEl = document.getElementById('app')
const render = (Component, item) =>
  ReactDOM.render(
    <AppContainer>
      <Component item={item} />
    </AppContainer>,
    rootEl
  )
