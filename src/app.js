import React from 'react'

import Time from './time'
import Setting from './setting'

const h = React.createElement

const getColorCode = () => Math.floor(Math.random() * 256)

class App extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      settings: {
        show: false,
        fixColor: false,
        fontSize: 10
      },
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
    this.toggleHour12 = this.toggleHour12.bind(this)
    this.togglefixColor = this.togglefixColor.bind(this)
    this.updateStyle = this.updateStyle.bind(this)
  }
  
  toggleSettings () {
    return this.setState((prev, props) => ({
      ...prev,
      settings: {
        ...prev.settings,
        show: !this.state.settings.show
      }
    }))
  }
  
  toggleHour12 () {
    return this.setState((prev, props) => ({
      ...prev,
      timeConfig: {
        ...prev.timeConfig,
        hour12: !this.state.timeConfig.hour12 
      }
    }))
  }
  
  togglefixColor () {
    return this.setState((prev, props) => ({
      ...prev,
      settings: {
        ...prev.settings,
        fixColor: !this.state.settings.fixColor 
      }
    }))
  }
  
  updateStyle () {
    const a = Math.random().toFixed(2)
    const rgba = `rgba( ${getColorCode()}, ${getColorCode()}, ${getColorCode()}, ${a})`
    
    console.log(rgba)
    return this.setState((prev, props) => ({
      ...prev,
      style: {
        backgroundColor: rgba,
        color: rgba
      }
    }))
  }
  
  render () {
    const { timeConfig, settings, style } = this.state
    
    return h('div', { className: 'wrapper' }, 
      h(Setting, {
        settings: settings,
        timeConfig: timeConfig,
        toggleHour12: this.toggleHour12,
        togglefixColor: this.togglefixColor,
        toggleSettings: this.toggleSettings 
      }),
      h(Time, { 
        config: timeConfig,
        settings: settings,
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

