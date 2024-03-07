import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ webPage }) => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#" style={{ marginLeft: "80px" }}>
        <strong>COMROBI</strong> MEDIA
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link
              className={webPage === "Home" ? "nav-link active" : "nav-link"}
              to="/home"
            >
              Home
            </Link>
          </li>

          <li class="nav-item">
            <Link
              className={webPage === "Chat" ? "nav-link active" : "nav-link"}
              to="/chat"
            >
              Chat
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
