import React from "react";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function App(toggleTask) {
  const [projects, setProjects] = React.useState([]);
  const [text, setText] = React.useState("");
  // const [todos, setTodos] = React.useState([]);
  const [counter, setCounter] = React.useState([]);

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
    }
  }
  function handleChange(e) {
    setText(e.target.value);
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
  function removeTask(id) {
    setProjects([...projects.filter((project) => project.id !== id)]);
    setCounter(projects.length - 1);
  }

  return (
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
              onClick={() => toggleTask(project.id)}
              className={project.complete ? "item-text strike" : "item-text"}
            >
              {project.name}
              <div className="trash-check">
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
export default App;
