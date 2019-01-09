import React, { Component } from "react";
// import styled from "styled-components";

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

        <form onSubmit={this.handleFormSubmit}>
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
          <input type="submit" value="Add" />
        </form>

        <ul>
          {this.state.data.map((data, index) => {
            return (
              <li key={index}>
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p> Address : {data.address}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AddressBook;
