import React from "react";

function Formprojectbutton() {
  const [projectName, setProjectName] = React.useState("");

  function handleChange(e) {
    setProjectName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addProject(projectName);
    setProjectName("");
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={projectName}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="What project name?"
      />
      <button>
        <BsPlusSquareDotted />
      </button>
    </form>
  );
}

export default Formprojectbutton;
