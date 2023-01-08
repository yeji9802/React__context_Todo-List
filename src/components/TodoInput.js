import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const { text, setText, todos, setTodos } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }

    setTodos([...todos, text]);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="할 일 추가하기"
        />
        <button type="submit">추가</button>
      </form>
    </section>
  );
};

export default TodoInput;
