import React from 'react'

const h = React.createElement


class Time extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      time: new Date().toLocaleTimeString("lookup", this.props.config),
      style: { 
        color: 'rgb(255, 255, 255)'
      },
    }
    this.updateTime = this.updateTime.bind(this)
    this.updateStyle = this.updateStyle.bind(this)
  }
  
  updateTime () {
    this.setState((prev, props) => ({
      ...prev,
      time: new Date().toLocaleTimeString("lookup", this.props.config)
    }))
  }
  
  updateStyle () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const a = Math.random()
    const rgb  = `rgb( ${r}, ${g}, ${b})`
    const rgba = `rgba( ${r}, ${g}, ${b}, ${a})`
    
    this.setState((prev, props) => ({
      ...prev,
      style: {
        backgroundColor: rgba,
        color: rgb
      }
    }))
  }
  
  componentDidMount () {
    console.log('componentDidMount')
    this.interval = window.setInterval(this.updateTime, 1000)
    this.interval2 = window.setInterval(this.updateStyle, 30000)
  }
  
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.interval)
    clearInterval(this.interval2)
  }
  
  render () {
    return h('div', {
      className: `${this.props.active ? 'time active' : 'time'}`,
      style: this.state.style 
    },
      this.state.time
    )
  }
}


export default Time