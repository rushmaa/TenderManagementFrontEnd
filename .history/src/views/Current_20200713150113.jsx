import React, { Component } from "react";
import { Form, Row, Col, Button, FormControl } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3 } from "react-bootstrap-icons";

//Css
import "../assets/css/theme.css";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  
  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';
    
    return (
      <div id='layout'>

      <div id='left' className={leftOpen} >
          <div className='icon'
               onClick={this.toggleSidebar} >
               &equiv;
          </div>
          <div className={`sidebar ${leftOpen}`} >
              <div className='header'>
                <h3 className='title'>
                  Left header
                </h3>
              </div>
              <div className='content'>
                  <h3>Left content</h3>
                  <p>
                    Aenean ut felis finibus, aliquet mi a, feugiat felis. Donec porta, odio et vulputate laoreet, nibh odio iaculis mi, et ornare nulla orci vitae ligula. Sed mi velit, aliquam sit amet efficitur eget, scelerisque vel ligula. Aliquam finibus erat nec accumsan posuere. Vestibulum rhoncus, velit vitae volutpat vehicula, leo orci faucibus eros, at ornare nibh nunc nec mi. Donec porttitor ultricies mauris quis euismod. Praesent sem libero, venenatis ut ornare eget, volutpat tincidunt lacus. Pellentesque aliquam turpis et mauris consectetur, quis condimentum nunc dignissim. Cras lectus libero, pellentesque non malesuada at, condimentum nec ex. Nam sed accumsan enim. Donec eros massa, malesuada quis nulla elementum, imperdiet condimentum orci. Integer non velit et nulla vestibulum vestibulum. Proin vehicula tristique libero, eu tincidunt erat cursus ac. Ut malesuada ante ut est dictum, ornare varius arcu aliquet. Quisque vitae libero eget orci tristique aliquam id sit amet nunc.
                  </p>
              </div>
          </div>
      </div>

      <div id='main'>
          <div className='header'>
              <h3 className={`
                  title
                  ${'left-' + leftOpen}
                  ${'right-' + rightOpen}
              `}>
                  Main header
              </h3>
          </div>
          <div className='content'>
              <h3>Main content</h3><br/>
              <p>
                Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
              </p><br/>
              <p>
                Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
              </p><br/>
              <p>
                Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
              </p>
          </div>
      </div>

      <div id='right' className={rightOpen} >
          <div className='icon'
               onClick={this.toggleSidebar} >
               &equiv;
          </div>
          <div className={`sidebar ${rightOpen}`} >
              <div className='header'>
                <h3 className='title'>
                  Right header
                </h3>
              </div>
              <div className='content'>
                  <h3>Right content</h3><br/>
                  <p>
                    Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
                  </p>
              </div>
          </div>
      </div>

  </div>
     
     <div className="pb-4 pt-3">
        <div className="container-fluid">
          <Card
            title="Current Tenders  "
            text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
          />
          <Title header="Currently showing All results. Please select a group from the summary panel on the left hand side." />
       
          <Title header="Search Criteria" /> 
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="4">
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="4">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Tender State
              </Form.Label>
              <Col sm="4">
                <select class="form-control">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Tender Type
              </Form.Label>
              <Col sm="4">
                <select class="form-control">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="4" className="pr-0">
                <Form.Control type="Category" placeholder="Category" />
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
                <select class="form-control">
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
                <Form.Check
                  type="radio"
                  label=" "
                  name="Radios1"
                  id="Radios1"
                />
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
                <Form.Check
                  type="radio"
                  label=""
                  name="Radios1"
                  id="Radios1"
                />
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
                <select class="form-control">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </Col>
            </Form.Group>
            <div className="btnPosition">
              <Button as="input" icon="Search" type="submit" value="Submit" />{" "}
              <Button as="input" type="reset" value="Reset" />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Current;
