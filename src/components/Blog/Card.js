import React from "react";
import './Card.scss';
import Card from "react-bootstrap/Card";
const CardComponent = (props) => {
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.subTitle}
          </Card.Subtitle>
          <Card.Text style={{"text-align": "center"}}>{props.description}</Card.Text>
          <Card.Link href={props.link}>Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
