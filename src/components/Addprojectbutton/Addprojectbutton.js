import React from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
// import AddIcon from '@mui/icons-material/Add';

function Addprojectbutton({ open, addProjectTask }) {
  const [proj, setProj] = React.useState("");

  // const [todos, setTodos] = React.useState([]);

  // function addProjectTask() {
  //   if (text) {
  //     const newItem = {
  //       id: Math.random().toString(36).substring(2, 9),
  //       task: text,
  //       complete: false,
  //       // isOpen: true,
  //     };
  //     setTodos([...todos, newItem]);

  //     console.log(todos, newItem);
  //   }
  // }
  function handleChangeP(e) {
    setProj(e.target.value);
  }
  function handleSubmitP(e) {
    e.preventDefault();
    addProjectTask(proj);
    setProj("");
  }
  function handleKeyPressP(e) {
    if (e.key === "Enter") {
      handleSubmitP(e);
    }
  }

  if (!open) return null;
  return (
    <div>
      <form onSubmit={handleSubmitP}>
        <input
          value={proj}
          type="text"
          onChange={handleChangeP}
          onKeyDown={handleKeyPressP}
          placeholder="What task need to do in this Pr.?"
        />
        <button>
          <BsPlusSquareDotted />
        </button>
      </form>
    </div>
  );
}
export default Addprojectbutton;
