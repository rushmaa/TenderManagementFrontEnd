import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FileTextFill, ArrowRightCircleFill } from "react-bootstrap-icons";
import { Button, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
//Components
import Card from "react-bootstrap/Card";
import NewsDetail from "../components/NewsDetail";
import Title from "../components/Title";
import "../assets/css/theme.css";

class Home extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card title="Welcome to the ADB Systems website" />
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


          {/*Video and Context*/}
          <div className="container-fluid videoContainer">
            <div
              className="spacer"
              data-desktop="80"
              data-mobi="60"
              data-smobi="60"
            ></div>
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
            <div
              className="spacer"
              data-desktop="80"
              data-mobi="60"
              data-smobi="60"
            ></div>
          </div>

          <Row>
          <Col md={1}></Col>
              <Col md={3}>
          <div class="container">
          <Card style={{ width: '20rem', height: '14rem' }}>
             <Card.Body>
             <Card.Title>Not a member?</Card.Title>
             <Card.Text>
             What are you waiting for? Go ahead and register yourself as a Supplier or Agency account!
                </Card.Text>
                <Button variant="primary"><Card.Link href="/signup">Sign Up</Card.Link></Button>
             </Card.Body>
          </Card>
          </div>
          </Col>
          <Col md={3}>
          </Col>
              <Col md={3}>
          <div class="container">
          <Card style={{ width: '20rem', height: '14rem' }}>
             <Card.Body>
             <Card.Title>Admin</Card.Title>
             <Card.Text>
             Log in to your Admin account through provided login credentials
                </Card.Text>
                <Button variant="primary"><Card.Link href="/login">Login</Card.Link></Button>
             </Card.Body>
          </Card>
          </div>     
          </Col>
            </Row>

                <div className="spacer" >
                 </div>

            <Row>
            <Col md={1}></Col>
              <Col md={3}>
          <div class="container">
          <Card style={{ width: '20rem', height: '14rem' }}>
             <Card.Body>
             <Card.Title>Tenders</Card.Title>
             <Card.Text>
             Want to browse through the latest tenders? Feel free to peruse through prsent tenders here!
                </Card.Text>
                <Button variant="primary"><Card.Link href="/tenders/Current">Present Tenders</Card.Link></Button>
             </Card.Body>
          </Card>
          </div>
          </Col>
          <Col md={3}>
          </Col>
              <Col md={3}>
          <div class="container">
          <Card style={{ width: '20rem', height: '14rem' }}>
             <Card.Body>
             <Card.Title>Publish a Tender</Card.Title>
             <Card.Text>
             Guidelines on publishing a tender on our website.
                </Card.Text>
                <Button variant="primary"><Card.Link href="News/Publish-Tender">Learn more</Card.Link></Button>
             </Card.Body>
          </Card>
          </div>
          </Col>
            </Row>
            
                <div className="spacer" >
                 </div>

            <Row>
            <Col md={1}></Col>
              <Col md={3}>
             <div class="container">
          <Card style={{ width: '20rem', height: '14rem' }}>
             <Card.Body>
             <Card.Title>Publish a Council Tender</Card.Title>
             <Card.Text>
             Guidelines on publishing a council tender on our website.
                </Card.Text>
                <Button variant="primary"><Card.Link href="News/Publish-Council">Learn more</Card.Link></Button>
             </Card.Body>
          </Card>
          </div>
          </Col>
          <Col md={3}>
          </Col>
              <Col md={3}>
           <div class="container">
          <Card style={{ width: '20rem', height: '14rem' }}>
             <Card.Body>
             <Card.Title>Publish a Contract</Card.Title>
             <Card.Text>
             Guidelines on publishing a contract on our website.
                </Card.Text>
                <Button variant="primary"><Card.Link href="News/Publish-Contract">Learn more</Card.Link></Button>
             </Card.Body>
          </Card>
          </div>
          </Col>
            </Row>

            <div className="spacer" >
                 </div>

          <div class="contactBar">
            <div class="container">
              <Row>
                <Col>
                  <div class="footerbar-spacer"></div>
                  <div class="inner">
                    <div class="heading-wrap">
                      <h3 class="heading">
                        Interested in this product? Wait no further and contact ADB Systems today!
                      </h3>
                    </div>
                    <div class="button-wrap">
                      <Link to="#" class="footerBar-button">
                        CONTACT US TODAY
                      </Link>
                    </div>
                  </div>
                  <div class="footerbar-spacer"></div>
                </Col>
              </Row>
            </div>
          </div>     
            </div>
          </div>
    );
  }
}

export default Home;
