import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FileTextFill, ArrowRightCircleFill } from "react-bootstrap-icons";
import { Button, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";


//Components
import "../assets/css/theme.css";
import FooterComp from "../components/Footer";
import Title from "../components/Title";
import CardComp from "../components/Card";
import FooterBar from "../components/FooterBar";
import HomeService from "../components/HomeService";
import HomeCard from "../components/HomeCard";


class Home extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <CardComp title="Welcome to the ADB Systems website" />
          <p className="pt-3">
            Welcome to the ADB Systems website. The site offers convenient
            access to all procurement opportunities open to the public within
            the Australian Government. You may make online submissions using the
            Online Lodgement System. You will also access the list of all goods
            , facilities, and works contracts issued by the Australian
            Government.
          </p>
          <Title header="Electronic Notification" />
          <p>
            If you're an ADB Systems Tenders & Contracts registered member, you
            may choose to be informed of tenders that might be of interest to
            you via e-mail. How? You check online for the latest tenders that
            suit your preferences, save the results as a search profile and then
            choose the Notification option to receive automatic email updates.
          </p>

          {/*Home Cards*/}
          <HomeCard />

          {/*Footer Contact Me Bar*/}
          <FooterBar />

           {/*Home Service*/}
           <HomeService />

          {/*Video and Context*/}
          <div className="container-fluid videoContainer">
            <div className="spacer"></div>
            <Row>
              <Col md={6}>
                <div className="videoHeight">
                  <h2 className="videoHeading">
                    WE HAVE A WIDE BREADTH OF EXPERIENCE
                  </h2>
                  <div className="decorator"></div>
                  <p className="sub-heading">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="videoHeight">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ap9PvIr9RTg"
                    className="video"
                  />
                </div>
              </Col>
            </Row>
            <div className="spacer"></div>
          </div>

         
          {/*Footer*/} 
          <FooterComp />
        </div>
      </div>
    );
  }
}

export default Home;
