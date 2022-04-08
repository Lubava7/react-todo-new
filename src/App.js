import React from "react";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function App(toggleTask) {
  const [projects, setProjects] = React.useState([]);
  const [text, setText] = React.useState([]);
  // const [todos, setTodos] = React.useState([]);
  const [counter, setCounter] = React.useState([]);

  function addProjects(text) {
    if (text) {
      const newProject = {
        id: Math.random().toString(36).substring(2, 9),
        task: text,
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
      <form onSubmit={handleSubmit}>
        <button onClick={() => addProjects()} className="button-add-icon">
          <AddIcon style={{ fontSize: "small" }} />
          <input
            className="input"
            value={text}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="create a project"
          />
        </button>
      </form>
      {projects.map((project) => {
        return (
          <div>
            <div
              onClick={() => toggleTask(project.id)}
              className={project.complete ? "item-text strike" : "item-text"}
            >
              {project.task}
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

//   deleteFriend = (userIndex, friendIndex) => {
//     const currUser = { ...this.state.users[userIndex] };
//     currUser.friends.splice(friendIndex, 1);
//     const newArr = [...this.state.users];
//     newArr[userIndex] = currUser;
//     this.setState({ users: newArr });
//   };
//   addFriend = (userIndex, friends) => {
//     const ui = { ...this.state.users[userIndex] };
//     ui.friends.push({ name: this.state.text });
//     const newArray = [...this.state.users];
//     newArray[userIndex] = ui;
//     this.setState({ users: newArray });
//   };
//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };

//   render() {
//     return (
//       <>
//         {this.state.users.map((user, userIndex) => {
//           return (
//             <div>
//               {user.name}
//               {user.age}
//               {user.friends.map((friend, friendIndex) => {
//                 return (
//                   <p>
//                     Friend: {friend.name}{" "}
//                     <span
//                       onClick={() => this.deleteFriend(userIndex, friendIndex)}
//                     >
//                       X
//                     </span>
//                   </p>
//                 );
//               })}
//             </div>
//           );
//         })}

//       </>
//     );
//   }
// }
