import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./UserInfo.css";
import React, { useState } from "react";
import validator from "validator";

function UserInfo() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="form-container">
      <Form className="body" onSubmit={handleSubmit}>
        <h3>Kanhaiya Kumar</h3>
        <hr className="my-4 hr" />
        <Form.Group className="mb-3 ">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            value={inputs.firstname || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={inputs.email || ""}
            onChange={(e) => {
              handleChange();
              validateEmail(e);
            }}
          />
          <br />
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {message}
          </span>
        </Form.Group>

        <hr className="my-4 hr" />

        <Form.Group className="mb-3" controlId="formoldPassword">
          <Form.Label> Old Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Old Password"
            name="oldpass"
            value={inputs.oldpass || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formnewPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="New Password"
            name="newpass"
            value={inputs.newpass || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formconfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmpass"
            value={inputs.confirmpass || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserInfo;
