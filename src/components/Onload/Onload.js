import React, { useState, useEffect } from "react";
import "./onload.scss";

const Onload = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("CODESHOWS");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 300);
    }
  }, [index]);

  return (
    <>
      <div className="center-body">
        <div id="name">
          <span>{text}</span>
        </div>
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
