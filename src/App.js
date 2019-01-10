import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Register from "./Register";
import TodoForm from "./TodoApp";
import AddressBook from "./AddressBook";

const NavBar = styled.nav`
  font-family: "Dosis", sans-serif;
  display: flex;
  justify-content: center;
  background: #ef6c57;
  padding: 30px;
  font-weight: 600;

  ul {
    text-decoration: none;
    display: flex;
    flex-direction: row;
  }

  li {
    list-style: none;
    margin: 0px 30px 0px 30px;
  }

  .linkStyle {
    color: #ffffff;
    text-decoration: none;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <ul>
              <li>
                <Link className="linkStyle" to="/Register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="linkStyle" to="/TodoApp">
                  Todo App
                </Link>
              </li>
              <li>
                <Link className="linkStyle" to="/AddressBook">
                  Address Book
                </Link>
              </li>
            </ul>
          </NavBar>
          <Route path="/Register" exact component={Register} />
          <Route path="/TodoApp" component={TodoForm} />
          <Route path="/AddressBook" component={AddressBook} />

        </div>
      </Router>
    );
  }
}

export default App;
