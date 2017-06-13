const initState = {
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(255, 255, 255)'
}

const getColorCode = () => Math.floor(Math.random() * 256)

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_STYLE':
      const a = Math.random().toFixed(2)
      const rgba = `rgba( ${getColorCode()}, ${getColorCode()}, ${getColorCode()}, ${a})`
      
      console.log(rgba)
      return {
        ...state,
        backgroundColor: rgba,
        color: rgba
      }
    default:
      return state
  }
}

export default reducer