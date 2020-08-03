import React from "react";
import "../assets/css/theme.css";

import { Question } from "react-bootstrap-icons";

const footer = props => {
  return (
    <div className='container-fluid'>
      <div className='card-body'>
        <h2 className='card-title'>{props.title} <Question className="iconStyle"/></h2>
        <p className='card-text text-secondary'>{props.text}</p>
       
      </div>
    </div> 
  ); 
}  

export default footer;