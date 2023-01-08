import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoTool = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleAllCompleted = () => {
    const copiedTodos = todos.map((todo) => {
      return {
        ...todo,
        completed: true,
      };
    });
    setTodos(copiedTodos);
  };

  const handleAllCanceled = () => {
    const copiedTodos = todos.map((todo) => {
      return {
        ...todo,
        completed: false,
      };
    });
    setTodos(copiedTodos);
  };
 
  const handleAllRemove = () => {
    setTodos([]);
  };

  return (
    <section>
      <button onClick={handleAllCompleted}>전체 완료</button>
      <button onClick={handleAllCanceled}>전체 해제</button>
      <button onClick={handleAllRemove}>전체 삭제</button>
    </section>
  );
};

export default TodoTool;
