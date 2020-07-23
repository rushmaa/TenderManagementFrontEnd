import React from "react";
import "../assets/css/theme.css";

const Title = (props) => {
  return (
    <div className="pt-2">
      <div className="header-body">
        <h2>{props.header}</h2>
      </div>
    </div>
  );
};

export default Title;
