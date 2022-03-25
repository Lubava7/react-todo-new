import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="nav">
        <li class="nav-item">
          <Link class="nav-link active" to="/">
            Dashboard
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" to="/project">
            Project
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;
