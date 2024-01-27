function reducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    case 'BUY':
      return state - action.money;
    default:
      return state;
  }
}

export default reducer;