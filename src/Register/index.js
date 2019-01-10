import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  font-family: "Dosis", sans-serif;
  justify-content: center;
  background: #d84c73;
  margin: 10px;
  padding: 10px;
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  border-radius:20px;

  label {
    margin: 40px;
  }

  input {
    margin: 40px 0px;
    border-radius: 10px;
    border: none;
    padding: 10px;
  }

  .submit {
    margin-left: 20px;
    width: 100px;
    background: #5c3b6f;
    color: #ffffff;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  padding-left: 20px;
  font-family: "Dosis", sans-serif;
`;

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleInputPassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <Title>Register Form</Title>
        <Form>
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={this.handleInputEmail}
            placeholder="Your Email"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={this.handleInputPassword}
            placeholder="Your Password"
          />
          <input className="submit" type="submit" value="Register" />
        </Form>
      </div>
    );
  }
}

export default Register;
