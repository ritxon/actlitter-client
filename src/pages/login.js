import React, { Component } from "react";

class login extends Component {
  state = {
    pwd: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  hanleSubmit = (e) => {};
  render() {
    return (
      <div>
        <h1>Hello, welcome to AcLitter!</h1>
        <div>
          <form onSubmit={this.hanleSubmit}>
            <input
              tyep="password"
              name="pwd"
              placeholder="password..."
              required
              onChange={this.handleChange}
            />
            <button onSubmit={this.hanleSubmit}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
