import React from 'react'
const h = React.createElement

const Switch = ({ setting, toggle }) => 
  h('div', {
    style: { fontSize: '.5em', textAlign: 'left' },
    className: setting ? 'switch active' : 'switch',
    onClick: toggle
  }, 
    h('div', { className: 'switch-inner'})
  )

export default Switch