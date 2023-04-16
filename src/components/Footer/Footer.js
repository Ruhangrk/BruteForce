import React from "react";
// import "sass";
import "./index.scss";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="content">
          <div id="social">
            <Link to="https://www.facebook.com/codeshows/">
              <BsFacebook />
            </Link>
          </div>
          <div id="social">
            <Link to="https://t.me/codeshows">
              {/* <i className="fa fa-twitter"></i> */}
            </Link>
          </div>
          <div id="social">
            <Link to="https://t.me/codeshows"></Link>
          </div>
          <div id="social">
            <Link to="https://www.linkedin.com/company/codeshows/">
              <i className="fa fa-linkedin"></i>
            </Link>
          </div>
          <div id="social">
            <Link to="https://codeshows.github.io/">
              <i className="fa fa-dribbble"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
