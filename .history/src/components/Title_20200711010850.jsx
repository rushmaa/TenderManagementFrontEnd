import React from "react";
import "../assets/css/theme.css";

const Title = props => {
  return (
    <div className='header-body pt-4'>
        <h2 className='title'>{props.header}</h2>
    </div> 
  ); 
}  

export default Title;
