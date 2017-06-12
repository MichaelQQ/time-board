import React from 'react'

const h = React.createElement

class Time extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      time: new Date().toLocaleTimeString("lookup", this.props.config)
    }
    this.updateTime = this.updateTime.bind(this)
  }
  
  updateTime () {
    this.setState((prev, props) => ({
      ...prev,
      time: new Date().toLocaleTimeString("lookup", this.props.config)
    }))
  }
  
  componentDidMount () {
    console.log('componentDidMount')
    this.interval = window.setInterval(this.updateTime, 1000)
    this.interval2 = window.setInterval(this.props.updateStyle, 30000)
  }
  
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.interval)
    clearInterval(this.interval2)
  }
  
  render () {
    return h('div', {
      className: `${this.props.settings.show ? 'time active' : 'time'}`,
      style: this.props.settings.fixColor
        ? { ...this.props.style, color: 'white' }
        : this.props.style 
    },
      this.state.time
    )
  }
}


export default Time