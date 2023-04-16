import React from "react";
import { useEffect } from "react";
import "./onload.scss";
const Onload = () => {
    var message = document.getElementById("name");
    function writeMessage(string) {
        var i = 0, intervalId;
        intervalId = window.setInterval(function () {
            message.innerHTML += string.charAt(i++);
            if (i > string.length)
                window.clearInterval(intervalId);
        }, 100);
    }
    useEffect(() => {
        writeMessage("CODESHOWS");
    }, [writeMessage]);
    // window.onload
    return (
        <>
            <div id="name">
            </div>
            <div className="center-body">
                <div className="loader-circle-11">
                    <div className="arc"></div>
                    <div className="arc"></div>
                    <div className="arc"></div>
                </div>
            </div>
        </>
    );
};

export default Onload;
