import React from "react";
import TitleContainer from "./TitleContainer";
const Description = () => {
  return (
    <div className="container-fluid float-left">
      <TitleContainer title={"Description"} />
      <div className="container">
      <p>
        SA Health would like to invite additional suppliers to apply for the SA
        Health Professional Services Panel Contract which includes:
        <ul>
          <li>Project Services (including ICT)</li>
          <li>
            Business and Advisory Services (incl. ICT, Clinical Coding & Health
            Information Management)
          </li>
          <li>
            Biomedical Engineering Services (relating to medical equipment,
            ‘biomedical technology’ (bio medical / bio-medical) equipment.)
          </li>
          <li>
            Asset Planning Support Services
          </li>
        </ul>
        Applications from Suppliers are now
            being accepted.
      </p>
      </div>
    </div>
  );
};

export default Description;
