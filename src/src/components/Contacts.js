import React from "react";
import TitleContainer from "./TitleContainer";
import { TelephoneFill, EnvelopeFill, PersonFill } from "react-bootstrap-icons";

export const Contacts = (props) => {
  return (
    <div class="container-fluid float-left">
      <TitleContainer title={"Contacts"} />

      <div className="container-fluid singleTenderPt">
        <ul className="pl-0">
          <li className="displayInline pr-3">
            <PersonFill />
          </li>
          <li className="displayInline">
            <p className="displayInline">{props.name}</p>
          </li>
        </ul>
        <ul className="pl-0">
          <li className="displayInline">
            <EnvelopeFill />
            <a className="pl-3" href={"mailto:" + props.email}>{props.email}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
