import React from 'react'

const h = React.createElement

const Setting = ({ active, toggleSettings }) =>
  h('div', {
    className: `${active ? 'settings active' : 'settings'}` 
  },
    h('label', { 
      style: { right: '-40px', top: '10px', position: 'absolute', color: 'black' },
      onClick: toggleSettings 
    },
      h('i', { className: `fa fa-2x fa-cog ${active ? 'active' : ''}`, 'aria-hidden': 'true' })
    ),
    h('div', null,
      'settings menu',
      h('li', null, '24-hour format'),
      h('li', null, 'fixed time color'),
      h('li', null, 'font size')
    ),
  )
  
export default Setting