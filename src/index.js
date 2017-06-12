import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './app'

import settingsReducer from './settings/reducer'
import timeReducer from './time/reducer'
import styleReducer from './time/styleReducer'

import { AppContainer } from 'react-hot-loader'

const h = React.createElement

const reducer = combineReducers({
  settings: settingsReducer,
  timeConfig: timeReducer,
  style: styleReducer
})

const store = createStore(reducer)

const render = (Component) => {
  ReactDOM.render(
    h(Provider, { store },
      h(AppContainer, null, h(Component, null, ''))
    ),
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
