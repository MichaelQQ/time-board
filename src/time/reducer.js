const initState = {
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_HOUR12':
      return {
        ...state,
        hour12: !state.hour12
      }
    default:
      return state
  }
}

export default reducer