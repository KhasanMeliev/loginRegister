import React, { useState } from "react";
import { Button, Form, Inputs, Wrapper } from "./Login.style";
import { TextField } from "@mui/material";
import swal from "sweetalert";

const Login = () => {
  const values = { name: "", password: "" };
  const [details, setDetails] = useState(values);
  const submitHandler = (e) => {
    e.preventDefault();
    if (details.name === "") {
      swal("Error!", "Name isn't blank", "error");
      return false;
    } else if (details.password.length < 6) {
      swal("Error!", "Password isn't blank or less than 6 characters", "error");
      return false;
    } else {
      swal("Success!", "Successfully Logined", "success");
      return true;
    }
  };
  return (
    <Wrapper id="/login">
      <Form onSubmit={submitHandler}>
        <h1>Login</h1>
        <Inputs>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value });
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
        </Inputs>
        <Button
          width="80%"
          height="36px"
          color="#eeeff1"
          fontSize="20px"
          style={{ marginTop: "15px" }}
          type="submit"
        >
          Login
        </Button>
        <p fontSize="16px">
          Don't have an account?
          <a
            href="/register"
            style={{
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Register
          </a>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
