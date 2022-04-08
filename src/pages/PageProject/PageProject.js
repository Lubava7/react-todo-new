import React from "react";
import "./PageProject.css";
import DeleteIcon from "@mui/icons-material/Delete";
// import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

function PageProject(toggleTask) {
  const [projects, setProjects] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [todos, setTodos] = React.useState([]);

  function addTask(text) {
    if (text) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: text,
        complete: false,
      };
      setProjects([...projects, newItem]);
      setCounter(projects.length + 1);
      console.log(projects, newItem);
    }
  }

  function removeTask(id) {
    setProjects([...projects.filter((project) => project.id !== id)]);
    setCounter(projects.length - 1);
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }
  // function handleToggle(id) {
  //   setProjects([
  //     ...projects.map((task) =>
  //       task.id === id ? { ...task, complete: !task.comlete } : { ...task }
  //     ),
  //   ]);
  //   setTodos([
  //     ...todos.map((task) =>
  //       task.id === id ? { ...task, complete: !task.comlete } : { ...task }
  //     ),
  //   ]);
  // }

  return (
    <div className="Todo">
      <h3>Новые проекты: {counter} </h3>
      {/* <h4>Введите название проекта:</h4> */}
      {/* <TodoFormProject addTask={addTask} /> */}

      {projects.map((project) => {
        return (
          <div>
            <div
              onClick={() => toggleTask(project.id)}
              className={project.complete ? "item-text strike" : "item-text"}
            >
              {project.task}
              <div className="trash-check-add">
                <div className="plusdotten">
                  <AddIcon onClick={addTodos} />
                </div>
                {/* <div>
                  <CheckIcon onClick={handleToggle} className="checkIcon" />
                </div> */}
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
  );
}

export default PageProject;
