import React from "react";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function randomId() {
  return Math.random().toString(36).substring(2, 9);
}
function App(toggleTask) {
  const [projects, setProjects] = React.useState([]);
  const [text, setText] = React.useState("");
  const [word, setWord] = React.useState("");
  const [counter, setCounter] = React.useState([]);
  const [currentProject, setCurrentProject] = React.useState({});

  function selectProject(project) {
    setCurrentProject(project);
  }
  function addTask(word) {
    if (word) {
      const newProject = { ...currentProject };
      const newTask = {
        id: randomId(),
        task: word,
      };

      newProject.tasks.push(newTask);
      setCurrentProject(newProject);
    }
  }

  function addProjects(text) {
    if (text) {
      const newProject = {
        id: randomId(),
        name: text,
        tasks: [],
        complete: false,
      };
      setProjects([...projects, newProject]);
      console.log(projects, newProject);
      setCounter(projects.length + 1);
      setCurrentProject(newProject);
    }
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleChangeTodos(e) {
    setWord(e.target.value);
  }
  function handleSubmitTodos(e) {
    e.preventDefault();
    addTask(word);
    setWord("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    addProjects(text);
    setText("");
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }
  function handleKeyPressTodos(e) {
    if (e.key === "Enter") {
      handleSubmitTodos(e);
    }
  }
  function removeTask(id) {
    setProjects([...projects.filter((project) => project.id !== id)]);
    setCounter(projects.length - 1);
  }

  return (
    <div className="div-project-todos">
      <div className="TodoList">
        <div>Add a new Project:</div>
        <div>Amount of projects : {counter}</div>

        <button className="button-add-icon">
          <AddIcon
            style={{ fontSize: "small" }}
            onClick={() => addProjects(text)}
          />
          <input
            className="input"
            value={text}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="create a project"
          />
        </button>

        {projects.map((project) => {
          return (
            <div>
              <div
                className="project-map"
                onClick={() => selectProject(project)}
              >
                <div
                  onClick={() => toggleTask(project.id)}
                  className="item-text"
                >
                  {project.name}

                  <div className="trash-check">
                    <div className="item-delete">
                      <DeleteIcon onClick={() => removeTask(project.id)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="todos-map">
        <div className="current-name">{currentProject.name}</div>
        <div>
          <button className="button-add-icon">
            <AddIcon
              style={{ fontSize: "small" }}
              onClick={() => addTask(word)}
            />
            <input
              className="input"
              value={word}
              type="text"
              onChange={handleChangeTodos}
              onKeyDown={handleKeyPressTodos}
              placeholder="add a task"
            />
          </button>
          {currentProject.tasks.map((task) => {
            return (
              <div>
                <div className="todos-map-div">
                  <div
                    onClick={() => toggleTask(task.id)}
                    className="item-text"
                  >
                    {task.task}

                    <div className="trash-check">
                      <div className="item-delete">
                        <DeleteIcon onClick={() => removeTask(task.id)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
