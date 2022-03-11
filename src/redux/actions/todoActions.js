export const setTodoStatus = (id, status) => ({
  type: 'SET_TODO_STATUS',
  id,
  status
})

export const createTodo = (todo) => ({
  type: 'CREATE_TODO',
  todo
})