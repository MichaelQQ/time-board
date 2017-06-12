import React from 'react'
import { connect } from 'react-redux'

import Time from './time'
import Settings from './settings'

const h = React.createElement

class App extends React.Component {
  componentWillMount () {
    this.props.dispatch({ type: 'UPDATE_STYLE' })
  }
  
  render () {
    const { style } = this.props
    
    return h('div', { className: 'wrapper' }, 
      h(Settings),
      h(Time),
      h('div', { style: { position: 'absolute', right: '0', bottom: '0' } },   
        `${style.color}`
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    style: state.style
  }
}

export default connect(mapStateToProps, null)(App)

