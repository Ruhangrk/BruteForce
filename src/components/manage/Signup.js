import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signup.scss";
export default function Signup() {
  return (
    <>
      <div className="MainFormContainer">
        <div className="FormContainer">
          <Form className="MySignUpForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter login email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
            <div className="MyFormButtons">
              <div className="MySubmitButton">
                <Button variant="outline-success" href="/home">
                  Submit
                </Button>{" "}
              </div>
              <div className="MyLoginButton">
                <Button variant="outline-success" href="/login">
                  Login
                </Button>{" "}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
