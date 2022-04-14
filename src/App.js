import React from "react";
import "./App.css";
import { FaTrashAlt } from "react-icons/fa";
import CheckIcon from "@mui/icons-material/Check";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

function randomId() {
  return Math.random().toString(36).substring(2, 9);
}
function App(toggleTask) {
  const [projects, setProjects] = React.useState([]);
  const [text, setText] = React.useState("");
  const [word, setWord] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const [currentProject, setCurrentProject] = React.useState({});

  React.useEffect(() => {
    document.title = `${counter} new projects`;
    // console.log("hello");
  }, [counter]);

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
    setCurrentProject(null);
    setCounter(projects.length - 1);
  }
  function removeTaskTodo(jop) {
    let copyCurrentProject = { ...currentProject };
    let copyProjects = [...projects];
    copyCurrentProject.tasks = currentProject.tasks.filter(
      (task) => task.id !== jop
    );
    copyProjects = projects.map((project) => {
      // console.log(project, copyCurrentProject);
      if (copyCurrentProject.id === project.id) {
        return copyCurrentProject;
      } else {
        return project;
      }
    });
    setProjects(copyProjects);
    setCurrentProject(copyCurrentProject);
  }

  return (
    <div className="div-project-todos">
      <div className="TodoList">
        <div className="div-todo-description">ToDo.</div>
        <div className="counter">Amount of projects : {counter}</div>
        <div className="div-under-counter">Projects</div>

        <input
          className="input"
          value={text}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="create a project"
        />

        <div className="fake-user-div-bottom">
          <div className="title-fake-sms" data-title="it`s fake , sorry">
            <BsPersonCircle className="fake-user" />
          </div>
        </div>

        {projects.map((project) => {
          return (
            <div>
              <div
                className="project-map"
                onClick={() => selectProject(project)}
              >
                <div
                  // onClick={() => toggleTask(project.id)}
                  className="item-text"
                >
                  {project.name}
                </div>
                <div className="item-delete">
                  <div className="trashtank-project">
                    <FaTrashAlt onClick={() => removeTask(project.id)} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {currentProject.name ? (
        <div className="todos-map">
          <div className="plus-name">
            <div className="breadcrumbs">Projects / {currentProject.name}</div>

            <div className="top-user-plus-150px">
              <div
                className="title-fake-sms-top"
                data-title="it`s fake , sorry"
              >
                <AiOutlinePlusSquare className="square" />
                <BsPersonCircle className="fake-user-top" />
              </div>
            </div>
          </div>
          <div className="current-name">{currentProject.name}</div>
          <div>
            <input
              className="input-todos"
              value={word}
              type="text"
              onChange={handleChangeTodos}
              onKeyDown={handleKeyPressTodos}
              placeholder="add a task"
            />

            {currentProject.tasks &&
              currentProject.tasks.map((task) => {
                return (
                  <div>
                    <div className="todos-map-div">
                      <div
                        // onClick={() => toggleTask(task.id)}
                        className="item-text"
                      >
                        {task.task}
                      </div>
                      <div className="item-delete">
                        <div
                          className="title-fake-sms-top"
                          data-title="it`s fake , sorry"
                        >
                          <div className="checkicon">
                            <CheckIcon />
                          </div>
                        </div>
                        <div className="trashtank">
                          <FaTrashAlt onClick={() => removeTaskTodo(task.id)} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
       
        <div className="top-user-plus-150px-null">
              <div
                className="title-fake-sms-top"
                data-title="it`s fake , sorry"
              >
                <AiOutlinePlusSquare className="square" />
                <BsPersonCircle className="fake-user-top" />
              </div>
              
          <div className="current-name">Let`s start !</div>
          </div>
      )}
    </div>
  );
}
export default App;
