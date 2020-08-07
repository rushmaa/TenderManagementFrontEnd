import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

//Components
import Card from "../components/Card";
import "../assets/css/theme.css";
import FooterComp from "../components/Footer";

class News extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card title="News" text="This page has News" />
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="newsContainer">
            <div className="container-fluid">
              <div>
                <div className="spacer"></div>
                <Row>
                  <Col md={8}>
                    <h4 class="newsTitle">Latest Posts</h4>
                  </Col>
                  <Col md={4}>
                    <h4 class="newsTitle">Recommended</h4>
                    <ul>
                      <li class="post">
                        <div className="post_content">
                          <h5>
                            <a
                              href="?page=post_gallery"
                              title="The Public Health Crisis Hiding in Our Food"
                            >
                              The Healthcare Tender
                            </a>
                          </h5>
                          <ul className="postDetails simple">
                            <li class="category">
                              <a
                                href="?page=category&amp;cat=health"
                                title="HEALTH"
                              >
                                HEALTH
                              </a>
                            </li>
                            <li className="date">10:11 PM, Feb 02</li>
                          </ul>
                        </div>
                      </li>
                      <li class="post">
                        <div className="post_content">
                          <h5>
                            <a
                              href="?page=post_gallery"
                              title="The Public Health Crisis Hiding in Our Food"
                            >
                              The Public Health Crisis Tender
                            </a>
                          </h5>
                          <ul className="postDetails simple">
                            <li class="category">
                              <a
                                href="?page=category&amp;cat=health"
                                title="HEALTH"
                              >
                                HEALTH
                              </a>
                            </li>
                            <li className="date">10:11 PM, Feb 02</li>
                          </ul>
                        </div>
                      </li>
                      <li class="post">
                        <div className="post_content">
                          <h5>
                            <a
                              href="?page=post_gallery"
                              title="The Public Health Crisis Hiding in Our Food"
                            >
                                The Healthcare Tender
                            </a>
                          </h5>
                          <ul className="postDetails simple">
                            <li class="category">
                              <a
                                href="?page=category&amp;cat=health"
                                title="HEALTH"
                              >
                                HEALTH
                              </a>
                            </li>
                            <li className="date">10:11 PM, Feb 02</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
       {/*Footer*/} 
          <FooterComp />
      
      </div>
    );
  }
}

export default News;
