import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from "axios";
import './Login.css';

const navigateToDashboard = (email) => {
  if (email.startsWith("grocify")) {
    // Redirect to the admin dashboard
    window.location.href = "/admin";
  } else {
    // Redirect to the customer dashboard
    window.location.href = "/logged-in";
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', { email, password }, { withCredentials: true });

      if (response.status === 200) {
        const { data } = response;
        const { token } = data;

        // Save the token to local storage for later use
        localStorage.setItem('token', token);

        // Redirect to the appropriate dashboard
        navigateToDashboard(email);
      } else {
        console.error('Login failed with status code:', response.status);
        window.alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error.message);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      } else if (error.request) {
        console.error('No response received. Check your server.');
      } else {
        console.error('Error message:', error.message);
      }

      window.alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="supermarket">
      <Container className="login-container">
        <Row></Row>
        <Col md={8} xs={8} lg={12}>
          <div className="login-card">
            <Card.Body>
              <div className="login-form">
                <h1 className="pwd">SIGN IN</h1>
                <div className="form-group">
                  <Form onSubmit={handleLogin} className="form">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required  // Add required attribute for validation
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required  // Add required attribute for validation
                      />
                    </Form.Group>
                    <div className="loginbutton">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="signup-link">
                    <p>
                      Don't have an account?{" "}
                      <a href="/Signup" className="signup">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
