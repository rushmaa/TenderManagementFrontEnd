import React from "react";
import TitleContainer from "./TitleContainer";
export const Enquiries = (props) => {
  return (
    <div class="container-fluid float-left">
      <TitleContainer title={"Enquiries"} />
      <p>{props.enquiry}</p>
    </div>
  );
};
