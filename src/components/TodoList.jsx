import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {

  let todos = useSelector(state => state.todoState.todos)
  const filterStatus = useSelector(state => state.filterState.status)

  todos = todos.filter( item => item.status === filterStatus)

  return (
    <div className="todoList">
      {
        todos.map(item => <TodoItem id={item.id} text={item.text} status={item.status} key={item.id}/>)
      }
    </div>
  )
}

export default TodoList