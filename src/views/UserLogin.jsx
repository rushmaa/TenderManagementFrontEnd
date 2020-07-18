import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {Link} from 'react-router-dom';
import "../assets/css/theme.css";
import { Button } from "reactstrap";
import { IoIosLock, IoMdPerson } from "react-icons/io";
import { connect } from "react-redux";
class UserLogin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  login=()=>{
    var history=this.props.history;
    history.push('/tenders/Current')
    // fetch(`http://localhost:5000/user/login/`, {
    //   method: "post",
    //   body: JSON.stringify({ email: this.state.username, pass: this.state.password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       this.props.setUser(data.user);
    //     }
    //   });
  };
render() {

    // const [toggle, setToggle] = useState(true)
    
    return (      
      <div className="App">
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
          <Link style={{color:'#000', fontSize:16}} to="google.com">Forgot your password?</Link>
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
    setUser: (data) => dispatch({ type: "SET_USER", payload:data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
