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
  changeFontSize
}) => {
  const { fixColor, show, fontSize, hour12 } = settings
  
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
          h(Switch, { setting: fixColor, toggle: toggleFixTimeColor }),
          h('span', { style: spanStyle }, 'White time color')
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
    changeFontSize: (value) => dispatch({ type: 'CHANGE_FONT_SIZE', value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
