import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";
import FooterComp from "../components/Footer";

import "../assets/css/theme.css";
import { FileTextFill, ArrowRightCircleFill } from "react-bootstrap-icons";

class PublishGuildlines extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card
            title="Publishing Guidelines"
            text="This page has guidelines for publishing your organisation's documents on our website."
          />

           {/*Footer*/} 
           <FooterComp />
        </div>
      </div>
    );
  }
}

export default PublishGuildlines;
