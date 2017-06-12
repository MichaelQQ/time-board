import React from 'react'
const h = React.createElement

const btnStyle = {
  display: 'inline-block',
  background: 'white',
  color: 'black',
  borderRadius: '100%',
  margin: '0 .5em',
  padding: '0 .2em'
}

const Counter = ({ fontSize, decrease, increase }) => 
  h('div', { style: { display: 'inline-block' } },
    h('a', { href: 'javascript: void 0', onClick: decrease },
      h('div', { style: btnStyle }, '-')
    ),
    h('div', { style: { display: 'inline-block' } }, fontSize),
    h('a', { href: 'javascript: void 0', onClick: increase },
      h('div', { style: btnStyle }, '+')
    )
  )
  
export default Counter