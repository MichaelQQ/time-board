import React from 'react'

import Time from './time'
import Setting from './setting'

const h = React.createElement

const getColorCode = () => Math.floor(Math.random() * 256)

class App extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      settings: false,
      style: { 
        color: 'rgb(255, 255, 255)'
      },
      timeConfig: {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    }
    this.toggleSettings = this.toggleSettings.bind(this)
    this.updateStyle = this.updateStyle.bind(this)
  }
  
  toggleSettings () {
    this.setState((prev, props) => ({
      ...prev,
      settings: !this.state.settings 
    }))
  }
  
  updateStyle () {
    const a = Math.random()
    const rgb  = `rgb( ${getColorCode()}, ${getColorCode()}, ${getColorCode()})`
    const rgba = `rgba( ${getColorCode()}, ${getColorCode()}, ${getColorCode()}, ${a})`
    
    this.setState((prev, props) => ({
      ...prev,
      style: {
        backgroundColor: rgba,
        color: rgb
      }
    }))
  }
  
  render () {
    const { timeConfig, settings, style } = this.state
    
    return h('div', { className: 'wrapper' }, 
      h(Setting, { active: settings, toggleSettings: this.toggleSettings }),
      h(Time, { 
        config: timeConfig,
        active: settings,
        style: style,
        updateStyle: this.updateStyle
      }),
      h('div', { style: { position: 'absolute', right: '0', bottom: '0' } },   
        `${style.color}`
      )
    )
  }
}

export default App

