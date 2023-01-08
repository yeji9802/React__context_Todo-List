import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";


const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}><TodoItem todo={todo}/></li>
      ))}
    </ul>
  );
};

export default TodoList;