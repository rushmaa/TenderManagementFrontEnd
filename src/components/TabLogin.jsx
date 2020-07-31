import React from "react";
import "../assets/css/theme.css";

const TabLogin = (props) => {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home"></Tab>
      <Tab eventKey="profile" title="Profile"></Tab>
    </Tabs>
  );
};

export default TabLogin;
