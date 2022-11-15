import React from "react";

function TodoList({ value }) {
  return (
    <div className="todoList">
      <p className="todoList__text">{value}</p>
      <div className="todoList__tools">
        <div className="tools__delete">
          <img src="https://img.icons8.com/color/512/delete-forever.png" />
        </div>
        <div className="tools__change">
          <img src="https://img.icons8.com/color/512/edit-property.png" />
        </div>
        <div className="tools__lock">
          <img src="https://img.icons8.com/pastel-glyph/512/website-locked--v2.png" />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
