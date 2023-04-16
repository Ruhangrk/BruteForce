import React from "react";
// import "sass";
import { Link } from "react-router-dom";

// import "./header.scss";
const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Events</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Profile</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
