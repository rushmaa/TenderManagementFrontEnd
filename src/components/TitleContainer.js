import React from "react";

const TitleContainer = (props) => {
  return (
    <div class="card container-fluid float-left mt-3">
      <div style={{ backgroundColor: "#E7EBF0" }}>
        <h4 className="card-title">{props.title}</h4>
      </div>
    </div>
  );
};

export default TitleContainer;
