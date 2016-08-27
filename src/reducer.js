function reducer(state, action) {
  switch (action.type) {
    case 'LOG':
      console.log('log')
      return state
    default:
      return state
  }
}

export default reducer
