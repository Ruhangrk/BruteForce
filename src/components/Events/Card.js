import React from "react";
import "./Card.scss";
import Card from "react-bootstrap/Card";
const CardComponent = (props) => {
  return (
    <div className="CardContainer">
      <img
        className="MyCardImage"
        src="https://media.wired.com/photos/5f63ea43470e71528f4f8876/master/pass/Gear-Laptop-Monitor-159167665.jpg/"
      />
      <div className="CardBtn">
        <button>{props.name}</button>
      </div>
      <div className="CardSection">
        <span>{props.description}</span>
        <div className="CardContent">
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
