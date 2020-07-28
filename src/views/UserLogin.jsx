import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {Link} from 'react-router-dom';
import "../assets/css/theme.css";
import { Button } from "reactstrap";
import { IoIosLock, IoMdPerson } from "react-icons/io";
import { connect } from "react-redux";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
class UserLogin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'test@test.com',
      password:'12345',
      modal:false,
      message:''
    }
  }
  login=()=>{
    fetch(`http://localhost:5000/user/login/`, {
      method: "post",
      body: JSON.stringify({ email: this.state.username, pass: this.state.password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          console.log('data.user===',data.user)
          var history=this.props.history;
          if (data.user?.confirmed === '0') {
            //Unconfirmed
            console.log('in unconf')
            this.setState({
              modal:true,
              message : 'Please hold on until we confirm your request till to get access to website'
            })
            // history.push('/NoAccess');
          } else if (data.user?.confirmed === '-1') {
            this.setState({
              modal:true,
              message : 'Unfortunately your request has been denied by the admin. Please contact support'
            })
            // history.push('/NoAccess');
            //Rejected
          } else if (data.user?.confirmed === '1') {
            //Accepted
            this.props.setUser(data.user);
            history.push('/tenders/Current')
          }
          else{
            this.setState({
              modal:true,
              message : 'User status unknown.'
            })
          }
        }
      });
  };
  
render() {
  const toggle  = (value) => {
    this.setState({
      modal:value
    });
  }
 
    return (      
      <div className="App">
        <MDBContainer>
                <MDBModal isOpen={this.state.modal}  centered>
                    <MDBModalHeader>Signup successful!</MDBModalHeader>
                    <MDBModalBody>
                        Your request is sent to one of our administrators and will provide you access soon.
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={()=>toggle(false)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
      <header className="App-header">
        <div
          style={{
            backgroundColor: "#FFF",
            width: "50rem",
            height: "35rem",
            borderRadius: 10,
            border: "1px solid #000",
          }}
        >
          <div style={{ height: 50, padding:2 }}>
            <Button
            //   color= {toggle? "danger":"secondary"}
              className="btn-lg btn-block"
              style={{ width: "50%", float: "left" }}
            >
              Supplier Login
            </Button>
            <Button
            //   color= {(!toggle)? "danger":"secondary"}
              className="btn-lg btn-block"
            //   onClick={()=>{setToggle(!toggle)}}
              style={{
                width: "50%",
                float: "right",
                marginTop: 0,
              }}
            >
              Agency Login
            </Button>
          </div>
          <img src={require('../assets/img/logo.jpg')} style={{paddingTop:"2%"}} alt='logo'/>,
          <div style={{ padding: "8%" }}>
            <InputGroup style={{ width: "60%", margin: "auto" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText><IoMdPerson/></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Username" onChange={(e)=>this.setState({username:e.target.value})}/>
            </InputGroup>
            <div style={{ padding: "3%" }}></div>
            <InputGroup style={{  width: "60%", margin: "auto" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText><IoIosLock/></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Password" type={'password'} onChange={(e)=>this.setState({password:e.target.value})}/>
            </InputGroup>
            
          </div>
          
          <Button
            color="primary"
            className="btn-lg btn-block"
            style={{ width: "49%", height: "10%", margin: "auto"}}
            onClick={()=>{
              this.login()
            }}
          >
            Sign In
          </Button>
          <p><Link style={{color:'#000', fontSize:16}} to="google.com">Forgot your password?</Link></p>
          <p><Link style={{color:'#000', fontSize:16}} to="/signup">Sign up here!</Link></p>
        </div>
      </header>
    </div>
   
    );
  }
}
const mapStateToProps = (state) => {
  var data={User: state.User }
  return data;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch({ type: "SET_USER", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
