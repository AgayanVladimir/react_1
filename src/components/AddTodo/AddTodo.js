import React from "react";

function AddTodo() {
  return (
    <div>
      <label>
        <input className="addTodo" type="text" />
        <input className="button" type="submit" value="Добавить задачу" />
      </label>
    </div>
  );
}
export default AddTodo;
