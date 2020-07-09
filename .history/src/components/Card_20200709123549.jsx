import React, { Component } from "react";
import "../assets/css/theme.css";

const Card = props => {
  return (
    <div className='Card'>
      <div className='Card-body'>
        <h2 className='Card-title'>Home</h2>
        <p className='Card-text text-secondary'>Home page</p>
      </div>
    </div> 
  ); 
}  

export default Card;
