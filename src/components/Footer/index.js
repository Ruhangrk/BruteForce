import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <ul className="social-links">
            <li>
              <Link to="https://www.facebook.com/codeshows/">
                <i className="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="https://t.me/codeshows">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://t.me/codeshows">
                <i className="fa fa-google-plus"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/codeshows/">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link to="https://codeshows.github.io/">
                <i className="fa fa-dribbble"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
    