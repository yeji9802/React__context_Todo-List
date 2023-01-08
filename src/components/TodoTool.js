import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoTool = () => {
  const { setTodos } = useContext(TodoContext);
 
  const handleClick = () => {
    setTodos([]);
  }

  return (
    <section>
      <button>전체 완료</button>
      <button onClick={handleClick}>전체 삭제</button>
    </section>
  );
};

export default TodoTool;
