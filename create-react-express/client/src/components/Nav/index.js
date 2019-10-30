import React from "react";
import "./style.css";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="nav-brand" href="/">
        <h3>Google Books</h3>
      </a>
      <a className="nav-link" href="/">
        Search
      </a>
      <a className="nav-link" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
