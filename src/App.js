import React, { Component } from "react";
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
// import styled from "styled-components";

import Register from "./Register";
import TodoForm from "./TodoApp";
import AddressBook from "./AddressBook";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/TodoApp">Todo App</Link>
              </li>
              <li>
                <Link to="/AddressBook">Address Book</Link>
              </li>
            </ul>
          </nav>
          <Route path="/Register" exact Component={Register} />
          <Route path="/TodoApp" Component={TodoForm} />
          <Route path="/AddressBook" Component={AddressBook} />
          
          <Register />
          <TodoForm />
          <AddressBook />
        </div>
      </Router>
    );
  }
}

export default App;
