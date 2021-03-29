import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../assets/css/theme.css";
import ComboBox from "../components/Autcomplete";
import { Redirect } from "react-router-dom";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenderContent: "",
      redirect: false,
    };
    console.log("this.props.push==", this.props);
  }

  setTenderContent(tenderContent) {
    this.setState({
      tenderContent: tenderContent,
    });
  }
  render() {
    if (this.state.redirect) {
      console.log("this.state.redirect==", this.state.redirect);
      this.state.redirect = false;

      try {
        const user = this.props.store.getState();
      } catch (error) {}

      return (
        <React.Fragment>
          <Redirect
            push
            to={{
              pathname: `/tenders/Current/DisplayTender/${this.state.tenderContent.tenderCode}`,
              state: { tender: this.state.tenderContent.tenderContent },
            }}
          />
          <div className="container-fluid">
            <Row className="headerRow">
              <Col className="col-Heading">
                <h1>Aussie Digital Tenders and Contracts Management</h1>
              </Col>
              <Col md={{ span: 2, offset: 2 }} className="col-Searching">
                <div>
                  <ComboBox
                    setTenderContent={(tenderContent) =>
                      this.setTenderContent(tenderContent)
                    }
                  />
                </div>
              </Col>

              <Col md={1} className="col-Searching">
                <div>
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      console.log(
                        "tender received===",
                        this.state.tenderContent
                      );
                      this.setState({
                        redirect: true,
                      });
                    }}
                  >
                    Search
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="container-fluid">
          <Row className="headerRow">
            <Col className="col-Heading">
              <h1>Aussie Digital Tenders and Contracts Management</h1>
            </Col>
            <Col md={3} className="col-Searching">
              <div>
                <ComboBox
                  setTenderContent={(tenderContent) =>
                    this.setTenderContent(tenderContent)
                  }
                />
              </div>
            </Col>
            <Col md={1} className="col-Searching">
              <div>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    console.log("tender received===", this.state.tenderContent);
                    this.setState({
                      redirect: true,
                    });
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Header;
