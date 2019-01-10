import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  font-family: "Dosis", sans-serif;
  justify-content: center;
  background: #d84c73;
  margin: 10px 10px 0 10px;
  padding: 10px 10px 0 10px;
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  border-radius: 20px 20px 0 0;

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

const Output = styled.ul`
  background: #ff8484;
  margin: -10px 10px 0 10px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 20px 20px;

  li {
    color:#ffffff;
    padding: 10px 0 10px 0;
  }
`;
class AddressBook extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          name: "Charizard",
          email: "charizard@gmail.com",
          address: "Lavender City , Hoenn Region"
        },

        {
          id: 2,
          name: "Blastoise",
          email: "blastoise@gmail.com",
          address: "Viridion City , Kanto Region"
        }
      ],
      name: "",
      email: "",
      address: ""
    };
  }
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleAddressChange = event => {
    this.setState({ address: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(
      "Submitted",
      this.state.name,
      this.state.email,
      this.state.address
    );

    const newAddress = {
      id: this.state.data.length,
      name: this.state.name,
      email: this.state.email,
      address: this.state.address
    };

    const newAddresses = this.state.data.concat(newAddress);

    this.setState({
      name: "",
      email: "",
      address: "",
      data: newAddresses
    });
  };

  render() {
    return (
      <div>
        <h1>Address Book</h1>

        <Form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Input your name"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Input your email"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <label>Address</label>
          <input
            type="text"
            placeholder="Your Address Here"
            onChange={this.handleAddressChange}
            value={this.state.address}
          />
          <input className="submit" type="submit" value="Add" />
        </Form>

        <Output>
          {this.state.data.map((data, index) => {
            return (
              <li key={index}>
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p> Address : {data.address}</p>
              </li>
            );
          })}
        </Output>
      </div>
    );
  }
}

export default AddressBook;
