import React from "react";
// import "./TodoForm.css";
import { BsPlusSquareDotted } from "react-icons/bs";

function TodoFormProject({ addTask }) {
  const [text, setText] = React.useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText("");
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="what project need to do?"
      />
      <button>
        <BsPlusSquareDotted />
      </button>
    </form>
  );
}
export default TodoFormProject;
