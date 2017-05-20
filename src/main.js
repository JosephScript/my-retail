import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/itemListing.jsx'
import './base.css'
import 'whatwg-fetch'
import Promise from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = Promise
}

const rootEl = document.getElementById('app')
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )

render(App)
if (module.hot) module.hot.accept('./components/itemListing.jsx', () => render(App))
