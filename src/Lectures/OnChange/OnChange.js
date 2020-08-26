import React, { Component } from "react";
import "./OnChange.scss";

class OnChange extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // handleEmail = (e) => {
  //   this.setState({
  //     email: e.target.value
  //   });
  // };

  // handlePassword = (e) => {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // };

  render() {
    console.log(this.state.password)
    return (
      <div className="onchange-wrapper">
        <div className="top">
          email: <input name="email" onChange={this.handleChange} />
          password: <input name="password" onChange={this.handleChange} />
          <button>SUBMIT</button>
        </div>
        <div className="contents">
          <div>email</div>
          <div>password</div>
        </div>
      </div>
    );
  }
}

export default OnChange;
