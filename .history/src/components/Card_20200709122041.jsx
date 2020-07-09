import React, { Component } from "react";
import "../assets/css/theme.css";

const Card = props => {
  return (
    <Card>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
    </Card.Body>
  </Card>
  ); 
}  

export default Card;
