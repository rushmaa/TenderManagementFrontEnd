import React, { Component } from "react";
import "../assets/css/theme.css";

const Card = props => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>Home</h2>
        <p className='card-text text-secondary'>Home page</p>
      </div>
    </div>
  ); 
}  

export default Card;
