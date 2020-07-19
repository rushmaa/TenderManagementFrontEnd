import React from "react";
import "../assets/css/theme.css";

import { Question } from "react-bootstrap-icons";
import overLay from "./overLay";

const Card = props => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{props.title} <Question className="iconStyle"/></h2>
        <p className='card-text text-secondary'>{props.text}</p>
       <overLay />
      </div>
    </div> 
  ); 
}  

export default Card;
