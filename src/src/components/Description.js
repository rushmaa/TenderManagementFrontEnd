 import React from "react";
import TitleContainer from "./TitleContainer";
const Description = (props) => {
  return (
    <div className="container-fluid float-left">
      <TitleContainer title={"Description"} />
      <div className="container-fluid pt-4">
      <p className="singleTenderPt">
        {props.descriptionLevel1}
        {/* <ul>
          <li>{props.descriptionListItem1}</li>
          <li>{props.descriptionListItem2}</li>
        </ul> */}
        
      </p>
      Applications from Suppliers are now
            being accepted.
      </div>
    </div>
  );
};

export default Description;
