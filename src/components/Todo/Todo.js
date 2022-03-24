import React from "react";
import "./Todo.css";
import { BsPlusSquareDotted } from "react-icons/bs";

function Todo() {
  const [text, setText] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  function addTask() {
    console.log("task added");
  }

  return (
    <from>
      <h3>Список дел: {counter} </h3>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          onKeyDown={handleKeyPress}
          placeholder="Что нужно сделать?"
        />
        <button onClick={addTask}>
          <BsPlusSquareDotted />
        </button>
      </div>
      <ul>
        <input type="checkbox" />
        <div>{counter} </div>
      </ul>
    </from>
  );
}
export default Todo;
