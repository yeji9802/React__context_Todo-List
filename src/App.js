import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTool from "./components/TodoTool";
import { TodoContext } from "./context/TodoContext";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ text, setText, todos, setTodos }}>
      <TodoInput />
      <TodoTool />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default App;
