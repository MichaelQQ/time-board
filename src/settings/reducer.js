const initState = {
  fixColor: false,
  show: false,
  fontSize: 10,
  hour12: true
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_HOUR12':
      return {
        ...state,
        hour12: !state.hour12
      }
    case 'TOGGLE_SHOW_SETTINGS':
      return {
        ...state,
        show: !state.show
      }
    case 'TOGGLE_FIX_TIME_COLOR':
      return {
        ...state,
        fixColor: !state.fixColor
      }
    case 'CHANGE_FONT_SIZE':
      let newFontSize = state.fontSize + action.value
      newFontSize = newFontSize < 1 ? 1 : newFontSize
      newFontSize = newFontSize > 17 ? 17 : newFontSize
      
      return {
        ...state,
        fontSize: newFontSize
      }
    default:
      return state
  }
}

export default reducer