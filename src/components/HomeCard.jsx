import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../assets/css/theme.css";

const HomeCard = (props) => {
  return (
    <section>
      <div className="spacer"></div>
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h5 className="text-uppercase small-title">Focus</h5>
              <h4 className="mb-3 videoHeading">Our Focus</h4>
              <p>
                It will be as simple as occidental in fact, it will be
                Occidental.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="cardBody">
              <Card.Body>
                <div className="cardContent">
                  <Card.Title>Not a member?</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Text>
                  <Link to="/signup" class=" cardBtn btn btn-primary">Sign Up</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="cardBody">
              <Card.Body>
                <div className="cardContent">
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Text>
                  <Link to="/login" class=" cardBtn btn btn-primary">Login</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="cardBody">
              <Card.Body>
                <div className="cardContent">
                  <Card.Title>Tenders</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Text>
                  <Link to="/tenders/Current" class=" cardBtn btn btn-primary">Present Tenders</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="spacer"></div>
        <Row>
          <Col md={4}>
            <Card className="cardBody">
              <Card.Body>
                <div className="cardContent">
                  <Card.Title>Publish a Tender</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Text>
                  <Link to="News/Publish-Tender" class=" cardBtn btn btn-primary">Learn more</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="cardBody">
              <Card.Body>
                <div className="cardContent">
                  <Card.Title>Publish a Council Tender</Card.Title>

                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Text>
                  <Link to="News/Publish-Council" class=" cardBtn btn btn-primary">Learn more</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="cardBody">
              <Card.Body>
                <div className="cardContent">
                  <Card.Title>Publish a Contract</Card.Title>

                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Text>
                  <Link to="News/Publish-Contract" class=" cardBtn btn btn-primary">Learn more</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default HomeCard;
