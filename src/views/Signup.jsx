import React from 'react'
import { InputGroup, Input } from "reactstrap";
import "../assets/css/theme.css";
import { Button } from "reactstrap";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
const Signup = (props) => {
    const createAccount = () => {
        fetch(`http://localhost:5000/user/signup`, {
            method: "post",
            body: JSON.stringify({ businessName: businessname, address: address, city: city, state: state, postcode: postcode, country: country, email: email, password: password, }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                toggle(true)
            });
    }
    const toggle  = (value) => {
        setmodal(value);
      }
    const [businessname, setBusinessname] = React.useState();
    const [address, setaddress] = React.useState();
    const [city, setcity] = React.useState();
    const [state, setstate] = React.useState();
    const [postcode, setpostcode] = React.useState();
    const [country, setcountry] = React.useState();
    const [email, setemail] = React.useState();
    const [password, setpassword] = React.useState();
    const [modal, setmodal] = React.useState(false);
    return (
        <div>
            <MDBContainer>
                <MDBModal isOpen={modal}  centered>
                    <MDBModalHeader>Signup successful!</MDBModalHeader>
                    <MDBModalBody>
                        Your request is sent to one of our administrators and will provide you access soon.
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={()=>toggle(false)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
            <div className="App">
                <header className="App-header pt-3 pb-3">
                    <div
                        style={{
                            backgroundColor: "#FFF",
                            width: "50rem",
                            height: "100%",
                            borderRadius: 10,
                            padding: 20,
                            marginTop: 10,
                            border: "1px solid #000",
                        }}
                    >
                        <img src={require('../assets/img/logo.jpg')} style={{ paddingTop: "2%" }} alt='logo' />,
                    <div style={{ padding: "8%" }}>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="Business name" onChange={(e) => { setBusinessname(e.target.value) }} />
                            </InputGroup>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="Password" type={'password'} onChange={(e) => { setpassword(e.target.value) }} />
                            </InputGroup>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="Address" onChange={(e) => { setaddress(e.target.value) }} />
                            </InputGroup>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="city" onChange={(e) => { setcity(e.target.value) }} />
                            </InputGroup>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="state" onChange={(e) => { setstate(e.target.value) }} />
                            </InputGroup>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="postcode" onChange={(e) => { setpostcode(e.target.value) }} />
                            </InputGroup>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="country" onChange={(e) => { setcountry(e.target.value) }} />
                            </InputGroup>
                            <InputGroup style={{ width: "60%", margin: "auto", padding: 10 }}>
                                <Input placeholder="email" onChange={(e) => { setemail(e.target.value) }} />
                            </InputGroup>
                        </div>

                        <Button
                            color="primary"
                            className="btn-lg btn-block"
                            style={{ width: "49%", height: "10%", margin: "auto" }}
                            onClick={() => {
                                createAccount()
                            }}
                        >
                            Sign Up
                        </Button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Signup
