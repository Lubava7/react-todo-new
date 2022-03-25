// import React from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function ActiveLastBreadcrumb() {
  return (
    // <div role="presentation" onClick={handleClick}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link className="link" aria-current="page" to="/">
        Dashboard
      </Link>
      <Link className="link" to="/project">
        Project
      </Link>
    </Breadcrumbs>
    /* </div> */
  );
}

// function Header() {
//   return (
//     <div>
//       <nav class="nav">
//         <li class="nav-item">
//           <Link class="nav-link active" to="/">
//             Dashboard
//           </Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link disabled" to="/project">
//             Project
//           </Link>
//         </li>
//       </nav>
//     </div>
//   );
// }

// export default Header;
