import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./UserInfo.css";
import {useSelector, useDispatch} from 'react-redux';
import userUpdate from './../store/actions/userUpdate.js';
import React, { useState } from "react";
// import validator from "validator";

function UserInfo() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.userList)
  const currUser = useSelector(state => state.currUser)

  let findInd = () => {
    let index = users.findIndex(user => user.uName === currUser)
    return index;
  }
  
//Redux
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputs.password===inputs.passwordConfirm){
      let str = "Name: "+inputs.fName+" "+inputs.lName+"\n Email: "+inputs.email+"\n Old Pass.: "+inputs.oldpass+"\n New Pass.: "+inputs.password+"\n Confirm Pass.: "+inputs.passwordConfirm;
      alert(str);
      dispatch(userUpdate(inputs,currUser));
    }
    else{
      alert("Wrong password");
    }
  };

  //--------------------------
  return (
    <div className="form-container">
      <Form className="body" onSubmit={handleSubmit}>
        <h3>{findInd()!==-1?`${users[findInd()].fName} ${users[findInd()].lName}`:"Login to display"}</h3>
        <hr className="my-4 hr" />
        <Form.Group className="mb-3 ">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="fName"
            value={inputs.fName || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="lName"
            value={inputs.lName || ""}
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
            onChange={handleChange} 
            pattern="/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g" required />
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
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formconfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            value={inputs.passwordConfirm || ""}
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
