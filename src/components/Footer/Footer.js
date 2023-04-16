import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import { RiTelegramLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="FooterContainer">
        <div className="FooterContent">
          <div id="FooterSocial">
            <Link to="https://www.facebook.com/codeshows/">
              <BsFacebook id="FooterIcon" />
            </Link>
          </div>
          <div id="FooterSocial">
            <Link to="https://t.me/codeshows">
              <SiTwitter id="FooterIcon" />
            </Link>
          </div>
          <div id="FooterSocial">
            <Link to="https://t.me/codeshows">
              <RiTelegramLine id="FooterIcon" />
            </Link>
          </div>
          <div id="FooterSocial">
            <Link to="https://www.linkedin.com/company/codeshows/">
              <SiLinkedin id="FooterIcon" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
