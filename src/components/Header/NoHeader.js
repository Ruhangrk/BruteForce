import React from "react";
import "./header.scss";
import logo from "../utils/logo.png";
import Navbar from 'react-bootstrap/Navbar';

function NoHeader() {
    return (
        <>
            <div className="navbar">
                <div className="MyLogo" >
                    <img className="HeaderLogo" src={logo} />
                    <Navbar.Brand href="#" >CodeShows</Navbar.Brand>
                </div>
            </div>
        </>
    );
}

export default NoHeader;
