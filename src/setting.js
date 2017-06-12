import React from 'react'

const h = React.createElement

const listStyle = {
  margin: '1em 0',
  listStyle: 'none'
}

const spanStyle = {
  margin: '0 .5em'
}

const btnStyle = {
  display: 'inline-block',
  background: 'white',
  color: 'black',
  borderRadius: '100%',
  margin: '0 .5em',
  padding: '0 .2em'
}

const aboutStyle = {
  width: '100%',
  // height: '50px',
  position: 'absolute',
  bottom: '0'
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
  togglefixColor,
  changeFontSize
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
        h('span', { style: spanStyle }, 'White time color')
      ),
      h('li', { style: listStyle },
        h('span', { style: spanStyle }, 'font size'),
        h('div', { style: { display: 'inline-block' } }, 
          h('a', { href: 'javascript: void 0', onClick: () => changeFontSize(-1) }, 
            h('div', { style: btnStyle }, '-')
          ),
          h('div', { style: { display: 'inline-block' } }, settings.fontSize),
          h('a', { href: 'javascript: void 0', onClick: () => changeFontSize(1) },
            h('div', { style: btnStyle }, '+')
          )
        )
      ),
      h('div', { style: aboutStyle }, 'MichaelQQ © All Rights Reversed')
    ),
  )
  
export default Setting