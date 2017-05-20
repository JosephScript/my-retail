import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

const rootEl = document.getElementById('app')
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )

render(App)
if (module.hot) module.hot.accept('./components/app.jsx', () => render(App))
