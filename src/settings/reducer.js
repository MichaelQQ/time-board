const initState = {
  fixTimeColor: false,
  fixBGColor: false,
  show: false,
  fontSize: 10,
  hour12: true,
  timeColor: '#ffffff',
  backgroundColor: '#dede2d'
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
        fixTimeColor: !state.fixTimeColor
      }
    case 'TOGGLE_FIX_BG_COLOR':
      return {
        ...state,
        fixBGColor: !state.fixBGColor
      }
    case 'CHANGE_TIME_COLOR':
      return {
        ...state,
        timeColor: action.value
      }
    case 'CHANGE_BACKGROUND_COLOR':
      return {
        ...state,
        backgroundColor: action.value
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