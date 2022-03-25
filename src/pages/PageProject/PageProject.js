import React from "react";
// import "./PageDashboard.css";

import TodoFormProject from "../../components/TodoFormProject/TodoFormProject";
import TodoProject from "../../components/TodoProject/TodoProject";

function PageProject() {
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

      <TodoFormProject addTask={addTask} />
      {todos.map((todo) => {
        return (
          <div>
            <input type="checkbox" />
            <TodoProject
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PageProject;