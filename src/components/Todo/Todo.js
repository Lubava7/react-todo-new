import React from "react";
import "./Todo.css";

function Todo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id + todo.key} className="item-todo">
      <div
        onClick={() => toggleTask(todo.id)}
        className={todo.complete ? "item-text strike" : "item-text"}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        &times;
      </div>
    </div>
  );
}
export default Todo;
