import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";


const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} idx={idx} />
      ))}
    </ul>
  );
};

export default TodoList;