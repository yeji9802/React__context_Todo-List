import React, { useState } from 'react';

const TodoItem = (props) => {

  return (
    <li>
      <input type="checkbox" />
      <span>{props.todo}</span>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;