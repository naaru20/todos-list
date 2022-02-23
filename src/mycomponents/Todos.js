import React from "react";
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
  
  let containerstyle = {
    minHeight: "37.5vh",
  };
  return (
    <div className="container my-3" style={containerstyle}>
      <h3 className="my-3">TODOS LIST</h3>
      {props.todos.length === 0? "no todos to display"
        : props.todos.map((todo) => {
            return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
          })}
    </div>
  );
};
