import React from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from "@mui/icons-material/Delete";
// import CheckIcon from "@mui/icons-material/Check";

function Addprojectbutton({ open, addProjectTask }) {
  const [proj, setProj] = React.useState("");
  // const [projects, setProjects] = React.useState([]);

  // function addProjectTask(proj) {
  //   if (proj) {
  //     const newProj = {
  //       id: Math.random().toString(36).substring(2, 9),
  //       task: proj,
  //       complete: false,
  //       // isOpen: true,
  //     };
  //     setProjects([...projects, newProj]);

  //     console.log(projects, newProj);
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
      {/* <div>
        {projects.map((project) => {
          return (
            <div className="todoproj">
              <div
                onClick={() => toggleTask(project.id)}
                className={project.complete ? "item-text strike" : "item-proj"}
              >
                {project.task}
                <div className="trash-check-add">
                  <div>
                    <CheckIcon onClick={handleToggle} className="checkIcon" />
                  </div>
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
      </div> */}
    </div>
  );
}
export default Addprojectbutton;
