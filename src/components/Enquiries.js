import React from "react";
import TitleContainer from "./TitleContainer";
export const Enquiries = (props) => {
  return (
    <div class="container-fluid float-left">
      <TitleContainer title={"Enquiries"} />

      <div className="container-fluid">
      <p className="singleTenderPt">{props.enquiry}</p>
      </div>
     
    </div>
  );
};
