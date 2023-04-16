import React from "react";
import "./index.scss";
import { BsFacebook } from "react-icons/bs";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import { RiTelegramLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="content">
          <div id="social">
            <Link to="https://www.facebook.com/codeshows/">
              <BsFacebook id="icon" />
            </Link>
          </div>
          <div id="social">
            <Link to="https://t.me/codeshows">
              <SiTwitter id="icon" />
            </Link>
          </div>
          <div id="social">
            <Link to="https://t.me/codeshows">
              <RiTelegramLine id="icon" />
            </Link>
          </div>
          <div id="social">
            <Link to="https://www.linkedin.com/company/codeshows/">
              <SiLinkedin id="icon" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
