import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Redirect,useHistory } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history=useHistory();
 
  async function loginFormHandler(e) {
    e.preventDefault();
    const loginUserData = {
      email:'rahulsharma1@questglt.com',
      password:'1234567890'
    };
    console.log(loginUserData);
    const res = await axios.post(
      "nurse/loginNurse",
      loginUserData
    );
    

    if (res.data.success) {
      console.log("success");
      localStorage.setItem("user", email);
      localStorage.setItem("token", res.data.data);
      setIsLoggedIn(true);
      history.push('/Dashboard')
    //   <Redirect to='/Dashboard'/>
    }
  }

  return (
    <div className="container">
      <Row style={{ marginBottom: "16rem", marginTop: "8rem" }}>
        <Col lg={3}></Col>
        <Col lg={6}>
          <h1 className="text-center mb-3">Login</h1>
          <Form onSubmit={loginFormHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
}

export default Login;
