import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.scss"

export default function Login() {
    return (
        <>
            <div className="MainFormContainer">
                <div className="FormContainer">
                    <Form className="MyLoginForm">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter login email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
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
                                <Button variant="outline-success" href="/home">Submit</Button>{' '}
                            </div>
                            <div className="MySignUpButton">
                                <Button variant="outline-success" href="/signup">SignUp</Button>{' '}
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}