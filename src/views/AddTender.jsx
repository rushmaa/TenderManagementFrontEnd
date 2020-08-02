import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3 } from "react-bootstrap-icons";
import axios from "axios";
//Components
import Card from "../components/Card";
import Title from "../components/Title";
import DatePicker from "../components/DatePicker";
import ModalDialog from "../components/ModalDialog";
import KeywordSelector from "../components/KeywordSelector";

class AddTender extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsHiden: false, modalError: false, selectedFile: null };


    // fetch("http://localhost:5000/tender/getfile").then((response) => response.blob()).then((blob) => {
    //   const url = window.URL.createObjectURL(new Blob([blob]));
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.setAttribute('download', `data.txt`);
    //   document.body.appendChild(link);
    //   link.click();
    //   link.parentNode.removeChild(link);
    // })
  }

  onChange(e) {
    let files = e.target.files[0];
    var form = new FormData();
    form.append('filename', 'tendercode.pdf')
    form.append('file', files)

    axios.post("http://localhost:5000/upload", form, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => { // then print response status
        console.log(res.statusText)
      })

    console.warn("data files", files);
  }

  handleClick(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/tender/addNewTender", {
        tenderCode: event.target.tenderCode.value,
        tenderState: event.target.tenderState.value,
        tenderName: event.target.tenderName.value,
        category: event.target.tenderCategory.value,
        issuedBy: event.target.tenderIssuedby.value,
        openingdateFrom: event.target.openingDateFrom.value,
        openingdateTo: event.target.openingDateTo.value,
        closingdateFrom: event.target.closingDateFrom.value,
        closingdateTo: event.target.closingDateTo.value,
        grouping: event.target.tenderGrouping.value,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.data) {
            if (response.data === "Successfully Added Tender") {
              console.log("SuccessFull redirecting");
              //TODO: redirect to another page
              console.log(this.state.modalIsHiden);
              this.state.modalIsHiden = true;
              this.state.modalError = false;
            } else {
              console.log("Unsucessfull");
              this.state.modalIsHiden = true;
              this.state.modalError = true;
              //TODO: show message
            }
          } else {
            console.log("No data received");
            this.state.modalIsHiden = true;
            this.state.modalError = true;
            //TODO: show message
          }
          this.forceUpdate();
        },
        (error) => {
          console.log(error);
          this.state.modalIsHiden = true;
          this.state.modalError = true;
          this.forceUpdate();
          //TODO: show message
        }
      );
  }
  render() {
    let modal;
    if (this.state.modalIsHiden) {
      console.log("in true");
      console.log(`passing modal error ${this.state.modalError}`);
      modal = <ModalDialog errorFlag={this.state.modalError} />;
    } else {
      console.log("in false");
    }
    return (
      <div className="pt-3">
        {/* Suceess message -START */}
        {modal}
        {/* END */}
        <div className="container-fluid">
          <Card
            title="Add Tender"
            text="This page can add your tender and it will show it in Current Tender page."
          />
          <div className="pt-3 main-container">
            <Form onSubmit={(event) => event.preventDefault()}>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender Code
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id="tenderCode"
                    type="Tender Code"
                    placeholder="Tender Code"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender State
                </Form.Label>
                <Col sm="4">
                  <select id="tenderState" className="form-control">
                    <option value="Any">Any</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="AdvanceNotice">Advance Notice</option>
                    <option value="Awarded">Awarded</option>
                    <option value="NotAwarded">Not Awarded</option>
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender Name
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id="tenderName"
                    type="Tender Name"
                    placeholder="Tender Name"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id="tenderCategory"
                    type="Category"
                    placeholder="Category"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Issued By
                </Form.Label>
                <Col sm="4">
                  <select id="tenderIssuedby" className="form-control">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Opening Date
                </Form.Label>
                <Col sm={4}>
                  <Form.Group as={Row}>
                    <Col sm={6}>
                      <InputGroup>
                        <DatePicker label={'From'} />
                      </InputGroup>
                    </Col>
                    <Col sm={6}>
                      <InputGroup>
                        <DatePicker label={'To'} />
                      </InputGroup>
                    </Col>
                  </Form.Group>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Closing Date
                </Form.Label>
                <Col sm={4}>
                  <Form.Group as={Row}>
                    <Col sm={6}>
                      <InputGroup>
                        <DatePicker label={'From'} />
                      </InputGroup>
                    </Col>
                    <Col sm={6}>
                      <InputGroup>
                        <DatePicker label={'To'} />
                      </InputGroup>
                    </Col>
                  </Form.Group>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Grouping
                </Form.Label>
                <Col sm="4">
                  <select id="tenderGrouping" className="form-control">
                    <option value="None">None</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Categories">Categories</option>
                    <option value="Status">Status</option>
                    <option value="Type">Type</option>
                  </select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Keywords
                </Form.Label>
                <KeywordSelector />
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Upload Documents
                </Form.Label>
                <Col sm="4">
                  <input
                    type="file"
                    name="foo"
                    onChange={(e) => this.onChange(e)}
                  />
                </Col>
              </Form.Group>

              <div className="btnPosition">
                <Button variant="primary" value="Submit" type="submit" onClick={() => this.handleClick.bind(this)}>
                  Add Tender
                </Button>{" "}
                <Button variant="primary" type="reset" value="Reset">
                  Clear
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTender;
