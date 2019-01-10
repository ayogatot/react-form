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
  border-radius:20px 20px 0 0;

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
    color: #ffffff;
    padding: 10px 0 10px 0;
  }
`;

const Title = styled.h1`
  padding-left: 20px;
  font-family: "Dosis", sans-serif;
`;

class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Eat"
        },
        {
          id: 1,
          text: "Swimming"
        }
      ]
    };
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    console.log("Todo Submitted", this.state.input);

    const newTodo = {
      id: this.state.todos.length,
      text: this.state.input
    };

    const newTodos = this.state.todos.concat(newTodo);

    this.setState({
      input: "",
      todos: newTodos
    })
  };

  render() {
    return (
      <div>
        <Title>Todo App</Title>
        <Form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            placeholder="Do Something"
            onChange={this.handleTodoInput}
            value={this.state.input}
          />
          <input className="submit" type="submit" value="Add" />
        </Form>
        <Output>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo.text}
              </li>
            );
          })}
        </Output>
      </div>
    );
  }
}

export default TodoForm;
