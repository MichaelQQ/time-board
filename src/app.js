import React from 'react'

import Time from './time'

const h = React.createElement

class App extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      settings: false,
      timeConfig: {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    }
    this.toggleSettings = this.toggleSettings.bind(this)
  }
  
  toggleSettings () {
    this.setState((prev, props) => ({
      ...prev,
      settings: !this.state.settings 
    }))
  }
  
  render () {
    return h('div', { className: 'wrapper' }, 
      h('div', { className: `${this.state.settings ? 'settings active' : 'settings'}` },
        h('label', { 
          style: { right: '-40px', top: '10px', position: 'absolute', color: 'black' },
          onClick: this.toggleSettings 
        },
          h('i', { className: 'fa fa-2x fa-cog', 'aria-hidden': 'true' })
        ),
        h('div', null,
          'settings menu',
          h('li', null, '24-hour format'),
          h('li', null, 'fixed time color'),
          h('li', null, 'font size')
        ),
      ),
      h(Time, { 
        ref: 'time',
        config: this.state.timeConfig,
        active: this.state.settings
      }),
      h('div', { style: { position: 'absolute', right: '0', bottom: '0' } },   
        `${this.refs.time ? this.refs.time.state.style.color : ''}`
      )
    )
  }
}

export default App

