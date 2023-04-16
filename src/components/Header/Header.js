import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">CODESHOWS</div>
        <div className="last" />
        <div className="actions">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/events">
            <button>Events</button>
          </Link>
          <Link to="/blog">
            <button>Blog</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
