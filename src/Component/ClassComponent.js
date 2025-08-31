import React, { Component, useState } from "react";


// ------------------- CLASS COMPONENT -------------------
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <p className="count-number">{this.state.count}</p>
        <div className="btn-group">
          <button onClick={this.increment} className="btn plus">+</button>
          <button onClick={this.decrement} className="btn minus">-</button>
        </div>
      </div>
    );
  }
}
export default ClassComponent