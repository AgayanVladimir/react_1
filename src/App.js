import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList value={"first task"} />
      <TodoList value={"second task"} />
      <TodoList value={"third task"} />
    </div>
  );
}

export default App;
