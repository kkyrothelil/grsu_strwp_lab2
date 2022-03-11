import React from 'react'
import './todoItem.scss'
import { useDispatch } from 'react-redux'
import { setTodoStatus } from '../redux/actions/todoActions'

const TodoItem = ({id, text, status}) => {

  const dispatch = useDispatch()

  switch (status) {
    case 'active':
      return (
        <div className='todoItem todoItem_active'>
          <input className='todoItem-checkbox' type="checkbox" name="status" id="status"
            onChange={() => dispatch(setTodoStatus(id, 'completed'))}
          />
          <div className="todoItem-text">{text}</div>
          <input className='todoItem-buttonDelete' type="button" value='x'
            onClick={() => dispatch(setTodoStatus(id, 'removed'))}
          />
        </div> 
      )
    case 'completed':
      return (
        <div className='todoItem todoItem_completed'>
          <input checked className='todoItem-checkbox' type="checkbox" name="status" id="status"
            onChange={() => dispatch(setTodoStatus(id, 'active'))}
          />
          <div className="todoItem-text">{text}</div>
          <input className='todoItem-buttonDelete' type="button" value='x'
            onClick={() => dispatch(setTodoStatus(id, 'removed'))}
          />
        </div> 
      )
    case 'removed':
      return (
        <div className='todoItem todoItem_removed'>
          <div className="todoItem-text">{text}</div>
        </div> 
      )
  }
}

export default TodoItem