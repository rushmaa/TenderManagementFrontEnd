import React from "react";
import "../assets/css/theme.css";

const Card = props => {
  return (
    <Button as="input" type={props.btn-type} value={props.btn-value} />
  ); 
}  

export default Card;
