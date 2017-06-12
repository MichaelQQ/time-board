import React from 'react'

const h = React.createElement

const listStyle = {
  margin: '1em 0',
  listStyle: 'none'
}

const spanStyle = {
  margin: '0 .5em'
}

const Switch = ({ setting, toggle }) => 
  h('div', {
    style: { fontSize: '.5em', textAlign: 'left' },
    className: setting ? 'switch active' : 'switch',
    onClick: toggle
  }, 
    h('div', { className: 'switch-inner'})
  )

const Setting = ({
  settings,
  timeConfig,
  toggleSettings,
  toggleHour12,
  togglefixColor
}) =>
  h('div', {
    className: `${settings.show ? 'settings active' : 'settings'}` 
  },
    h('label', { 
      style: { right: '-40px', top: '10px', position: 'absolute', color: 'black' },
      onClick: toggleSettings 
    },
      h('i', { className: `fa fa-2x fa-cog ${settings.show ? 'active' : ''}`, 'aria-hidden': 'true' })
    ),
    h('div', null,
      h('h2',{ style: { margin: '.5em 0', textAlign: 'center' } }, 'SETTINGS'),
      h('li', { style: listStyle }, 
        h(Switch, { setting: timeConfig.hour12, toggle: toggleHour12 }),
        h('span', { style: spanStyle }, '12-hour format')
      ),
      h('li', { style: listStyle },
        h(Switch, { setting: settings.fixColor, toggle: togglefixColor }),
        h('span', { style: spanStyle }, 'fixed time color')
      ),
      h('li', { style: listStyle },
        h('span', { style: spanStyle }, 'font size')
      )
    ),
  )
  
export default Setting