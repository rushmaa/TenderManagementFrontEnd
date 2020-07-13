import React from "react";
import "../assets/css/theme.css";

const TenderTable = props => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text text-secondary'>{props.text}</p>
      </div>
    </div> 
  ); 
}  

export default TenderTable;
