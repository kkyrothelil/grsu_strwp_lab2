const initialState = {
  todos: [
    {
      id: 1,
      text: 'Build a modern To do app',
      status: 'active',
    },
    {
      id: 2,
      text: 'Workout for 30 minutes at the gym',
      status: 'active',
    },
    {
      id: 3,
      text: 'Buy groceries (milk, vegetables, fruits, fish)',
      status: 'active',
    },
    {
      id: 4,
      text: 'Prepare for vacation this weekend',
      status: 'completed',
    },
    {
      id: 5,
      text: 'Zoom meeting call with Product and Engineering team',
      status: 'completed',
    },
    {
      id: 6,
      text: 'check your mum',
      status: 'removed',
    }
  ],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODO_STATUS': return {...state, todos: state.todos.map(item => item.id === action.id ?
        {
          ...item,
          status: action.status
        }
        : item
      )}
    case 'CREATE_TODO': return {...state, todos: state.todos.concat(action.todo)}
    default: return state
  }
}

export default todoReducer