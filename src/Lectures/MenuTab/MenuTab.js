import React, { Component } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./MenuTab.scss";

const obj = {
  1: <First/>,
  2: <Second />,
  3: <Third />
}

const array = ["First", "Second", "Third"]

export default class MenuTab extends Component {
  state = {
    activeTab: 1
  }

  clickHandler = (id) => {
    this.setState({ activeTab: id })
  }
  render() {
    return (
      <div className="wrapper">
        <ul className="tabs">
          {/* <li onClick={() => this.clickHandler(1)}>First</li>
          <li onClick={() => this.clickHandler(2)}>Second</li>
          <li onClick={() => this.clickHandler(3)}>Third</li> */}
          {array.map((str, idx) => {
            return <li key={idx} onClick={() => this.clickHandler(idx + 1)}><str /></li>;
          })}
        </ul>
        <div className="contents">
          {obj[this.state.activeTab]}
        </div>
      </div>
    );
  }
}
