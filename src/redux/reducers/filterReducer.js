const initialState = {
  status: 'active',
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_STATUS': return {...state, status: action.filterStatus}
    default: return state
  }
}

export default filterReducer