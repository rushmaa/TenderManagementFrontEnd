import React from "react";

export const TenderTitle = (props) => {
  return (
    <div
      class="border-bottom"
      style={{ paddingTop: 20, paddingLeft: 20, width: "80%" }}
    >
      <p style={{ fontSize: 24, fontWeight: 500, color: "#173D6E" }}>
         {props.issuedByHeader}
      </p>
  <p style={{ marginTop: -20, fontWeight: 500 }}>{props.issuedBy}</p>
    </div>
  );
};
