import React, { useState } from "react";
import { Button, Form, Inputs, Wrapper } from "./Register.style";
import { TextField } from "@mui/material";
import swal from "sweetalert";

const Register = () => {
  const values = { name: "", email: "", password: "", confirmPassword: "" };
  const [details, setDetails] = useState(values);
  const submitHandler = (e) => {
    e.preventDefault();
    if (details.name === "") {
      swal("Error!", "Name isn't blank", "error");
      
      return false;
    } else if (details.email === "") {
      swal("Error!", "Email isn't blank", "error");
      return false;
    } else if (details.password.length < 6) {
      swal("Error!", "Password isn't blank or less than 6 characters", "error");
      return false;
    } else if (details.confirmPassword !== details.password) {
      swal("Error!", "Please Confirm Password", "error");
      return false;
    } else {
      swal("Success!", "Successfully Created Account", "success");
      return true;
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <h1>Register</h1>
        <Inputs>
          <TextField
            id="outlined"
            label="Name"
            type="text"
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value });
            }}
          />
          <TextField
            id="outlined"
            label="Email"
            type="email"
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Confirm password"
            type="password"
            onChange={(e) => {
              setDetails({ ...details, confirmPassword: e.target.value });
            }}
          />
        </Inputs>
        <Button
          width="80%"
          height="36px"
          color="#eeeff1"
          fontSize="20px"
          style={{ marginTop: "15px" }}
          type="submit"
        >
          Create Account
        </Button>
        <p fontSize="16px">
          Already have an account?
          <a
            href="/login"
            style={{
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Login
          </a>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
