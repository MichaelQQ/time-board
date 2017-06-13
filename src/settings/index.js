import React from 'react'
import { connect } from 'react-redux'

import Switch from './switch'
import Counter from './counter'
const h = React.createElement

const listStyle = {
  margin: '1em 0',
  listStyle: 'none'
}

const spanStyle = {
  margin: '0 .5em'
}

const aboutStyle = {
  width: '100%',
  position: 'absolute',
  bottom: '0'
}

const Settings = ({
  settings,
  showSettings,
  toggleHour12,
  toggleFixTimeColor,
  toggleFixBGColor,
  changeTimeColor,
  changeBGColor,
  changeFontSize
}) => {
  const { fixTimeColor, fixBGColor, show, fontSize, hour12 } = settings
  
  return (
    h('div', { className: `${show ? 'settings active' : 'settings'}` },
      h('label', {
        style: { right: '-40px', top: '10px', position: 'absolute', color: 'black' },
        onClick: showSettings
      },
        h('i', { className: `fa fa-2x fa-cog ${show ? 'active' : ''}`, 'aria-hidden': 'true' })
        ),
      h('div', null,
        h('h2', { style: { margin: '.5em 0', textAlign: 'center' } }, 'SETTINGS'),
        h('div', { style: listStyle },
          h(Switch, { setting: hour12, toggle: toggleHour12 }),
          h('span', { style: spanStyle }, '12-hour format')
        ),
        h('div', { style: listStyle },
          h(Switch, { setting: fixTimeColor, toggle: toggleFixTimeColor }),
          h('span', { style: spanStyle }, 'Fixed time color')
        ),
        fixTimeColor && h('div', { style: listStyle },
          h('span', { style: spanStyle }, 'Time color'),
          h('input', {
            type: 'color',
            onChange: (e) => changeTimeColor(e.target.value)
          }), 
        ),
        h('div', { style: listStyle },
          h(Switch, { setting: fixBGColor, toggle: toggleFixBGColor }),
          h('span', { style: spanStyle }, 'Fixed background color')
        ),
        fixBGColor && h('div', { style: listStyle },
          h('span', { style: spanStyle }, 'Background color'),
          h('input', {
            type: 'color',
            onChange: (e) => changeBGColor(e.target.value)
          }), 
        ),
        h('div', { style: listStyle },
          h('span', { style: spanStyle }, 'font size'),
          h(Counter, {
            fontSize,
            decrease: changeFontSize.bind(null, -1),
            increase: changeFontSize.bind(null, 1)
          })
        ),
        h('div', { style: aboutStyle }, 'MichaelQQ © All Rights Reversed')
      ),
    )
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSettings: () => dispatch({ type: 'TOGGLE_SHOW_SETTINGS' }),
    toggleHour12: () => dispatch({ type: 'TOGGLE_HOUR12' }),
    toggleFixTimeColor: () => dispatch({ type: 'TOGGLE_FIX_TIME_COLOR' }),
    toggleFixBGColor: () => dispatch({ type: 'TOGGLE_FIX_BG_COLOR' }),
    changeTimeColor: (value) => dispatch({ type: 'CHANGE_TIME_COLOR', value }),
    changeBGColor: (value) => dispatch({ type: 'CHANGE_BACKGROUND_COLOR', value }),
    changeFontSize: (value) => dispatch({ type: 'CHANGE_FONT_SIZE', value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
