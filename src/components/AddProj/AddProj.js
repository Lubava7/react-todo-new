import React from "react";
import { BsPlusSquareDotted } from "react-icons/bs";

function AddProj({ addProj }) {
  const [text, setText] = React.useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addProj(text);
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
        placeholder="write the task"
      />
      <button>
        <BsPlusSquareDotted />
      </button>
    </form>
  );
}

export default AddProj;
