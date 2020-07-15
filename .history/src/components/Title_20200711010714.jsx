import React from "react";
import "../assets/css/theme.css";

const Title = props => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='title'>{props.title}</h2>
      </div>
    </div> 
  ); 
}  

export default Title;
