import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setfirstName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { email, password, firstName };
  
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', userData, { withCredentials: true });
  
      if (response.status >= 200 && response.status < 300) {
        console.log('Signup successful!');
        
        // Redirect based on the email address
        if (email.startsWith('grocify')) {
          console.log('Navigating to admin page');
          navigate("/admin");
        } else {
          console.log('Navigating to logged-in page');
          navigate("/logged-in");
        }
      } else {
        console.error('Signup failed with status code:', response.status);
        console.error('Error message from the server:', response.data);
        window.alert('An error occurred during signup. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred during signup:', error.message);
      window.alert('An error occurred during signup. Please try again.');
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
                <h1 className="pwd">SIGN UP</h1>
                <div className="form-group">
                  <Form onSubmit={handleSignup} className="form">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="confirm">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Group>
                    <div className="loginbutton">
                      <Button variant="primary" type="submit">
                        Sign Up
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </div>
        </Col>
      </Container>
    </div>
  );
}
