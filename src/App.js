import "./App.css";
import Header from "./mycomponents/Header"; //this is rfc
import { Footer } from "./mycomponents/Footer";
import { About } from "./mycomponents/About";
import { Todos } from "./mycomponents/Todos"; //these both are rafc, a = arrow function
import React, { useState, useEffect } from "react";
import { AddTodo } from "./mycomponents/AddTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("hlw i am onDelete", todo);

    setTodos(
      todos.filter((e) => {  //this function is creat a todo
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));  //And then store in local storage
  };                                                       // localstorage store data in form of json file..stringify convert json file into string

  const addTodo = (title, des) => {
    console.log("i am add a todo", title, des);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      des: des,
    };
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="TODOS-LIST" searchBar={true} />
        <Switch>
          <Route path="/" exact render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
