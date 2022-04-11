import React from "react";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function App(toggleTask) {
  const [projects, setProjects] = React.useState([]);
  const [text, setText] = React.useState("");
  const [word, setWord] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [counter, setCounter] = React.useState([]);
  const [currentProject, setCurrentProject] = React.useState({});

  function selectProject(project) {
    setCurrentProject(project);
  }
  function addTask(word) {
    if (word) {
      const newTask = {
        id: Math.random().toString(36).substring(2, 9),
        task: word,
      };
      setTodos([...todos, newTask]);
    }
  }

  function addProjects(text) {
    if (text) {
      const newProject = {
        id: Math.random().toString(36).substring(2, 9),
        name: text,
        // complete: false,
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
    setTodos([...todos.filter((todo) => todo.id !== id)]);
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
          {todos.map((todo, currentProject) => {
            return (
              <div>
                <div className="todos-map-div">
                  <div
                    onClick={() => toggleTask(todo.id)}
                    className="item-text"
                  >
                    {todo.task}

                    <div className="trash-check">
                      <div className="item-delete">
                        <DeleteIcon onClick={() => removeTask(todo.id)} />
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
