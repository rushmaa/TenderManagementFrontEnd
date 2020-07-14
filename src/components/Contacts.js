import React from "react";
import TitleContainer from "./TitleContainer";
export const Contacts = () => {
  return (
    <div class="container-fluid float-left">
      <TitleContainer title={"Contacts"} />
      <p style={{ marginBottom: -5 }}>Mr. John Doe</p>
      <u>
        <a href={"mailto:" + "johndoe@email.com"}>johndoe@email.com</a>
      </u>
    </div>
  );
};
