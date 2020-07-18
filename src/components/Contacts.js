import React from "react";
import TitleContainer from "./TitleContainer";
export const Contacts = (props) => {
  return (
    <div class="container-fluid float-left">
      <TitleContainer title={"Contacts"} />
      <p style={{ marginBottom: -5 }}>{props.name}</p>
      <u>
        <a href={"mailto:" + props.email}>{props.email}</a>
      </u>
    </div>
  );
};
