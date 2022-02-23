import React from 'react'

export const TodoItems = ({ todo, onDelete }) => {
  let todostyle = {
    background: "#212529",
    padding: "10px",
    color: "white",
    borderRadius: "10px"
   }

  return (
    <>
    <div className='todo' style={todostyle}>
      <h4>{todo.title }</h4>
      <p>{todo.des}</p>
      <button className="btn btn-danger btn-sm" onClick={() => { onDelete(todo) }} >Delete</button>
    </div><hr />
    </>
  )
}
