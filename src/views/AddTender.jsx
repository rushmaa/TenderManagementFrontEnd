import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3 } from "react-bootstrap-icons";
import axios from "axios";
//Components
import Card from "../components/Card";
import DatePicker from "../components/DatePicker";
import ModalDialog from "../components/ModalDialog";
import KeywordSelector from "../components/KeywordSelector";

class AddTender extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalIsHiden: false, modalError: false, selectedFile: null,
      tenderCode: '',
      tenderState: '',
      tenderName: '',
      category: '',
      issuedBy: '',
      openingdateFrom: '',
      openingdateTo: '',
      closingdateFrom: '',
      closingdateTo: '',
      grouping: '',
      categories : [],
      fileList : []
    };


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
    var filename= Math.floor(Math.random() * 1000) + 1; 
    form.append('filename', `${filename}.pdf`)
    form.append('file', files)
    this.state.fileList.push(`${filename}.pdf`)
    axios.post("http://localhost:5000/upload", form, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => { // then print response status
        console.log(res.statusText)
      })

    console.warn("data files", files);
  }
  componentDidUpdate(){
    console.log('current state==', this.state.categories)
  }

  handleClick() {
    console.log('submiting')
    axios
      .post("http://localhost:5000/tender/addNewTender", {
        tenderCode: this.state.tenderCode,
        tenderState: this.state.tenderState,
        tenderName: this.state.tenderName,
        category: this.state.tenderCategory,
        issuedBy: this.state.tenderIssuedby,
        openingdateFrom: this.state.openingdateFrom,
        openingdateTo: this.state.openingdateTo,
        closingdateFrom: this.state.closingdateFrom,
        closingdateTo: this.state.closingdateTo,
        grouping: this.state.tenderGrouping,
        categories: this.state.categories.join(','),
        fileList: this.state.fileList.join(','),
      })
      .then(
        (response) => {
          console.log(response);
          if (response.data) {
            if (response.data === "Successfully Added Tender") {
              console.log("SuccessFull redirecting");
              this.props.history.push('/tenders/Current')
              //TODO: redirect to another page
              console.log(this.state.modalIsHiden);
              this.state.modalIsHiden = true;
              this.state.modalError = false;
            } else {
              console.log("Unsucessfull");
              this.setState({
                modalError : true
              })
              //TODO: show message
            }
          } else {
            console.log("No data received");
            this.props.history.push('/tenders/Current')
            //TODO: show message
          }
        },
        (error) => {
          console.log(error);
        
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
            <Form >
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender Code
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id="tenderCode"
                    type="Tender Code"
                    placeholder="Tender Code"
                    onChange={(e)=>{
                      this.setState({
                        tenderCode:e.target.value
                    })}
                  }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender State
                </Form.Label>
                <Col sm="4">
                  <select id="tenderState" className="form-control" onChange={(e)=>{
                    this.setState({
                      tenderState : e.target.value
                    })
                  }}>
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
                    onChange={(e)=>{
                      this.setState({
                        tenderName:e.target.value
                    })}
                  }
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
                    onChange={(e)=>{
                      this.setState({
                        tenderCategory:e.target.value
                    })}
                  }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Issued By
                </Form.Label>
                <Col sm="4">
                  <select id="tenderIssuedby" className="form-control" onChange={(e)=>{
                    this.setState({
                      tenderIssuedby : e.target.value
                    })
                  }}>
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
                        <DatePicker label={'From'} onChange={(date)=>{
                          console.log('date==',date)
                      this.setState({
                        openingdateFrom:date
                    })}
                  }/>
                      </InputGroup>
                    </Col>
                    <Col sm={6}>
                      <InputGroup>
                        <DatePicker label={'To'} onChange={(date)=>{
                      this.setState({
                        openingdateTo:date
                    })}
                  }/>
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
                        <DatePicker label={'From'} onChange={(date)=>{
                      this.setState({
                        closingdateFrom:date
                    })}
                  }/>
                      </InputGroup>
                    </Col>
                    <Col sm={6}>
                      <InputGroup>
                        <DatePicker label={'To'} onChange={(date)=>{
                      this.setState({
                        closingdateTo:date
                    })}
                  }/>
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
                  <select id="tenderGrouping" className="form-control" onChange={(e)=>{
                    this.setState({
                      tenderGrouping : e.target.value
                    })
                  }}>
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
                <KeywordSelector onChange={(listItem)=>{
                  console.log('listitem==', listItem)
                  this.setState({
                    categories: listItem
                  })
                }}/>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword" >
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
                <Button variant="primary"  type="button" onClick={() => this.handleClick()}>
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
