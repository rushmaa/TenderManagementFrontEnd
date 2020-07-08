import React, {useState} from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {Link} from 'react-router-dom';

import "../assets/css/theme.css";
import { Button } from "reactstrap";
import { IoIosLock, IoMdPerson } from "react-icons/io";

class UserLogin extends React.Component {
render() {

    // const [toggle, setToggle] = useState(true)
    
    return (      
      <div className="App">
      <header className="App-header">
        <div
          style={{
            backgroundColor: "#FFF",
            width: "50rem",
            height: "30rem",
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
          <img src={require('../assets/img/logo.jpg')} style={{width:100, height:100, marginBottom:-50}}/>,
          <div style={{ padding: "8%" }}>
            <InputGroup style={{ width: "60%", margin: "auto" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText><IoMdPerson/></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Username" />
            </InputGroup>
            <div style={{ padding: "3%" }}></div>
            <InputGroup style={{  width: "60%", margin: "auto" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText><IoIosLock/></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Password" />
            </InputGroup>
            
          </div>
          
          <Button
            color="primary"
            className="btn-lg btn-block"
            style={{ width: "49%", height: "10%", margin: "auto"}}
          >
            Sign In
          </Button>
          <Link style={{color:'#000', fontSize:16}} to="google.com">Forgot your password?</Link>
        </div>
      </header>
    </div>
    );
  }
}

export default UserLogin;
