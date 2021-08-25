import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Redirect,useHistory } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  async function loginFormHandler(e) {
    e.preventDefault();

    const loginUserData = {
      email,
      password,
    };
    console.log(loginUserData);
    const res = await axios.post(
      "nurse/loginNurse",
      loginUserData
    );
    console.log(res.data);

    if (res.data.success) {
      console.log("success");
      localStorage.setItem("user", email);
      localStorage.setItem("token", res.data.data);
      history.push('/Dashboard')
      // <Redirect to='/Dashboard'/>
    } else {
      <Redirect to="/Login" />;
    }
  }

  return (
    <div className="container">
      <Row style={{ marginBottom: "16rem", marginTop: "8rem" }}>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Form onSubmit={loginFormHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
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
