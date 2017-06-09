import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import { AppContainer } from 'react-hot-loader'

const h = React.createElement

const render = (Component) => {
  ReactDOM.render(
    h(AppContainer, null, h(Component, null, '')),
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  })
}
