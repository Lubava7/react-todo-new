import React from "react";
import "./PageProject.css";
import Addprojectbutton from "../../components/Addprojectbutton/Addprojectbutton";
import TodoFormProject from "../../components/TodoFormProject/TodoFormProject";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
// import { BsPlusSquareDotted } from "react-icons/bs";
import AddIcon from "@mui/icons-material/Add";

function PageProject(toggleTask) {
  const [todos, setTodos] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  function addProjectTask(proj) {
    if (proj) {
      const newProj = {
        id: Math.random().toString(36).substring(2, 9),
        task: proj,
        complete: false,
        // isOpen: true,
      };
      setProjects([...projects, newProj]);

      console.log(projects, newProj);
    }
  }

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
    setProjects([...projects.filter((project) => project.id !== id)]);
  }
  function handleToggle(id) {
    setTodos([
      ...todos.map((task) =>
        task.id === id ? { ...task, complete: !task.comlete } : { ...task }
      ),
    ]);
    setProjects([
      ...projects.map((task) =>
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
            <div>
              <Addprojectbutton open={isOpen} addProjectTask={addProjectTask} />
              {projects.map((project) => {
                return (
                  <div className="todoproj">
                    <div
                      onClick={() => toggleTask(project.id)}
                      className={
                        project.complete ? "item-text strike" : "item-proj"
                      }
                    >
                      {project.task}
                      <div className="trash-check-add">
                        <div>
                          <CheckIcon
                            onClick={handleToggle}
                            className="checkIcon"
                          />
                        </div>
                        <div
                          className="item-delete"
                          onClick={() => removeTask(project.id)}
                        >
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PageProject;
