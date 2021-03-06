import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3 } from "react-bootstrap-icons";
const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];

const MainForm = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchCode, setSearchCode] = React.useState("");

  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = people.filter((people) =>
      people.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  
  function HandelInput(e) {
    setSearchCode(e.target.value);

  }
  function codeTable() {
    props.toggleTable(searchCode)
  }

  return (
    <div className="pt-3">
      <div className="container-fluid">
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Keywords
            </Form.Label>
            <Col sm="4">
              <Form.Control type="Keywords" placeholder="Keywords" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Tender Code
            </Form.Label>
            <Col sm="4">
              <Form.Control type="Tender Code" value={searchCode} placeholder="Tender Code" onChange={HandelInput}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Tender State
            </Form.Label>
            <Col sm="4">
              <select className="form-control">
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
              Tender Type
            </Form.Label>
            <Col sm="4">
              <select className="form-control">
                <option value="Any">Any</option>
                <option value="RequestforProposal">Request for Proposal</option>
                <option value="RequestforTender">Request for Tender</option>
                <option value="ExpressionofInterst">
                  Expression of Interst
                </option>
                <option value="SaleTender">Sale Tender</option>
                <option value="RequestforInformation">
                  Request for Information
                </option>
                <option value="RequestforQuatation">
                  Request for Quatation
                </option>
                <option value="RegistrationofInterest">
                  Registration of Interest
                </option>
                <option value="Prequalification">Prequalification</option>
                <option value="AdvancedTenderNotice">
                  Advanced Tender Notice
                </option>
                <option value="IndustryBrifing">Industry Brifing</option>
                <option value="Invitation">Invitation</option>
              </select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="4" className="pr-0">
              <Form.Control
                type="text"
                placeholder="Start typing for autocomplete"
                value={searchTerm}
                onChange={handleChange}
              />
              <ul>
                {searchResults.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Col>
            <Col sm="1" className="pl-1">
              <Search color="#173d6e" size={25} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Issued By
            </Form.Label>
            <Col sm="4">
              <select className="form-control">
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
              <Form.Check type="radio" label=" " name="Radios1" id="Radios1" />
              <Form.Group as={Row}>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>From</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder=" " />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        {" "}
                        <Calendar3 size={15} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>To</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder=" " />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        {" "}
                        <Calendar3 size={15} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Check
                type="radio"
                label="This Week (Monday - Sunday)"
                name="Radios1"
                id="Radios2"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Closing Date
            </Form.Label>
            <Col sm={4}>
              <Form.Check type="radio" label="" name="Radios1" id="Radios1" />
              <Form.Group as={Row}>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>From</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder=" " />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        {" "}
                        <Calendar3 size={15} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>To</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder=" " />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        {" "}
                        <Calendar3 size={15} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Check
                type="radio"
                label="This Week (Monday - Sunday)"
                name="Radios1"
                id="Radios2"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Grouping
            </Form.Label>
            <Col sm="4">
              <select className="form-control">
                <option value="None">None</option>
                <option value="Buyer">Buyer</option>
                <option value="Categories">Categories</option>
                <option value="Status">Status</option>
                <option value="Type">Type</option>
              </select>
            </Col>
          </Form.Group>
          <div className="btnPosition">
            <Button variant="primary" value="Submit" onClick={codeTable}>Submit</Button>{" "}
            <Button variant="primary" type="reset" value="Reset" >Reset</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MainForm;
