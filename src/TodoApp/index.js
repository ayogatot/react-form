import React, { Component } from "react";
// import styled from "styled-components";

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
        <h1>Todo App</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            placeholder="Do Something"
            onChange={this.handleTodoInput}
            value={this.state.input}
          />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo.id} : {todo.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoForm;
