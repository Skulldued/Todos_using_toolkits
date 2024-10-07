import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/slices/todoSlice';

const TodoItems = ({id ,text , isCompleted}) => {
  const dispatch = useDispatch();
  function removeTodoItems(){
    dispatch(removeTodo(id));
  }
  return (
    <>
      <div className='todo-item'>
         <input type="checkbox" checked={isCompleted} />
         <p>{text}</p>
         <button onClick={removeTodoItems} >X</button>
      </div>
    </>
  )
}

export default TodoItems
