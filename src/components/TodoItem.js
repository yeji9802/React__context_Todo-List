import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";


const TodoItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [editText, setText] = useState("")
  const { todos, setTodos } = useContext(TodoContext);

  const { todo, idx } = props;

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleEdit = () => {
    setEdit(true);
  }

  const handleClick = () => {
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1, { ...props.todo, text: editText });
    setTodos(copiedTodos);
    setEdit(false)
  }

  const handleRemove = () => {
    console.log(todos);
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1);
    setTodos(copiedTodos);
  }

  const handlecompleted = (e, v) => {
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1, { ...props.todo, completed: e.target.checked });
    console.log(copiedTodos);
    setTodos(copiedTodos);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handlecompleted}
      />
      {edit ? (
        <input type="text" value={editText} onChange={handleChange} />
      ) : (
        <span
          style={{
            color: `${todo.completed ? "#FF0000" : ""}`,
          }}
        >
          {todo.text}
        </span>
      )}
      {edit ? (
        <button onClick={handleClick}>확인</button>
      ) : (
        <button onClick={handleEdit}>수정</button>
      )}
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
};

export default TodoItem;