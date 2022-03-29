import React from "react";
import "./PageDashboard.css";

import TodoForm from "../../components/TodoForm/TodoForm";
// import Todo from "../../components/Todo/Todo";

function PageDashboard(toggleTask) {
  const [todos, setTodos] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  function addTask(text) {
    if (text) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: text,
        complete: false,
      };
      setTodos([...todos, newItem]);
      setCounter(todos.length + 1);
      console.log(todos, newItem);
    }
  }
  function removeTask(id) {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    setCounter(todos.length - 1);
  }
  function handleToggle(id) {
    setTodos([
      ...todos.map((task) =>
        task.id === id ? { ...task, complete: !task.comlete } : { ...task }
      ),
    ]);
  }

  return (
    <div className="Todo">
      <h3>Список дел: {counter} </h3>

      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <div>
            <div
              onClick={() => toggleTask(todo.id)}
              className={todo.complete ? "item-text strike" : "item-text"}
            >
              {todo.task}
            </div>
            <div>
              <input type="checkbox" onClick={handleToggle} />
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
              &times;
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PageDashboard;
