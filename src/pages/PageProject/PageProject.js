import React from "react";
import "./PageProject.css";
import TodoFormProject from "../../components/TodoFormProject/TodoFormProject";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

function PageProject(toggleTask) {
  const [todos, setTodos] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

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
      <h3>Новые проекты: {counter} </h3>
      <h4>Введите название проекта:</h4>
      <TodoFormProject addTask={addTask} />

      {todos.map((todo) => {
        return (
          <div>
            <div
              onClick={() => toggleTask(todo.id)}
              className={todo.complete ? "item-text strike" : "item-text"}
            >
              {todo.task}

              <div className="trash-check-add">
                <div className="plusdotten">
                  <AddIcon onClick={() => setIsOpen(true)} />
                </div>
                <div>
                  <CheckIcon onClick={handleToggle} className="checkIcon" />
                </div>
                <div
                  className="item-delete"
                  onClick={() => removeTask(todo.id)}
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PageProject;
