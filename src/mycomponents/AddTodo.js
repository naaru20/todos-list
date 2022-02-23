import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    let submit = (e) => {
        e.preventDefault();
      if (!title || !des) {
        alert('Title and Description can not be blank')
      }
      else {
        addTodo(title, des);
        setTitle("");
        setDes("");
      }
    }
  return (
    <form onSubmit={submit} className="container">
          <h3 className="my-3">ADD TODOS</h3>
          
      <div>
        <label htmlFor="title" className="form-lable">
          Title
        </label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" />
          </div>
          
      <div>
        <label htmlFor="description"  className="form-lable">
          Description
        </label>
        <input type="text" value={des} onChange={(e)=>{setDes(e.target.value)}} className="form-control" />
          </div>
          
      <button type="submit" className="btn btn-success my-3 btn-sm">
        ADD
      </button>
    </form>
  );
};
