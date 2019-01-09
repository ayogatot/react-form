import React, { Component } from "react";
// import styled from "styled-components";

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
      <form>
        <label htmlFor="">Email</label>
        <input type="email" onChange={this.handleInputEmail} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={this.handleInputPassword} />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default Register;
