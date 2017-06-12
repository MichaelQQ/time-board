import React from 'react'
import { connect } from 'react-redux'

const h = React.createElement

class Time extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      time: new Date().toLocaleTimeString("lookup", this.props.timeConfig)
    }
    this.updateTime = this.updateTime.bind(this)
  }
  
  updateTime () {
    this.setState((prev, props) => ({
      ...prev,
      time: new Date().toLocaleTimeString("lookup", this.props.timeConfig)
    }))
  }
  
  componentDidMount () {
    console.log('componentDidMount')
    this.interval = window.setInterval(this.updateTime, 1000)
    this.interval2 = window.setInterval(() => 
      this.props.dispatch({ type: 'UPDATE_STYLE' }), 30000)
  }
  
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.interval)
    clearInterval(this.interval2)
  }
  
  render () {
    const { settings, style } = this.props
    const { fixColor, show, fontSize } = settings
    
    return h('div', {
      className: `${show ? 'time active' : 'time'}`,
      style: fixColor
        ? { ...style, color: 'white', fontSize: fontSize + 'vw' }
        : { ...style, fontSize: fontSize + 'vw' }
    },
      this.state.time
    )
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    timeConfig: state.timeConfig,
    style: state.style
  }
}

export default connect(mapStateToProps, null)(Time)
