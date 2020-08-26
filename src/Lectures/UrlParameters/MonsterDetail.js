import React, { Component } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

class MonsterDetail extends Component {
  state = {
    monster: {}
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.hello}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          monster: res,
        })
      );

  }

componentDidUpdate(prevProps) {
  // 1.조건
 if(prevProps.match.params.hello !== this.props.match.params.hello) {
   fetch(
     `https://jsonplaceholder.typicode.com/users/${this.props.match.params.hello}`
   )
     .then((res) => res.json())
     .then((res) =>
       this.setState({
         monster: res,
       })
     );
 }
  //2. 조건이 참일떄 실행
}


  render() {
    const { id, name, email} = this.state.monster
    return (
      <div className="url-parameters">
        <div className="btn-wrapper">
          <button>Back to Monsters List</button>
        </div>
        <Card id={id} name={name} email={email} />
        <div className="btn-wrapper">
          <button
            onClick={() => this.props.history.push(`/monsters/${id - 1}`)}
          >
            Previous
          </button>
          <button
            onClick={() => this.props.history.push(`/monsters/${id + 1}`)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default MonsterDetail;