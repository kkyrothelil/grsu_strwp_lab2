import React, { useState } from 'react'
import './createTodo.scss'
import { Modal, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { createTodo } from '../redux/actions/todoActions'

const CreateTodo = () => {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [text, setText] = useState('');

  const dispatch = useDispatch()

  return (
    <div className='createTodo'>
      <div className="createTodo-button"
        onClick={handleShow}
      >+</div>
      <div className="createTodo-title">Create New Item</div>
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>Create new item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Text: </span><input type="text" value={text} onChange={e => setText(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="primary"
            onClick={() => {
              const todo = {
                id: uuidv4(),
                text: text,
                status: 'active'
              }
              dispatch(createTodo(todo))
              handleClose()
              setText('')
            }}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateTodo