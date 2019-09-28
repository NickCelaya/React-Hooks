import React, { Component } from "react";
import { Link } from "react-router-dom";

class classComponent extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      fruit: ["apple", "Pear", "peach", "mangos", "dragonfruit", "kiwi"]
    };
  }

  inputHandler = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    const fruit = this.state.fruit
      .filter(element => {
        return element.includes(this.state.input);
      })
      .map((element, index) => {
        return <h3 key={index}>{element}</h3>;
      });

    return (
      <div>
        <Link to={"/"}>
          <button>Back to Home</button>
        </Link>
        <h2>Class Component filtering of state array</h2>
        <input type="text" onChange={this.inputHandler} />
        {fruit}
      </div>
    );
  }
}

export default classComponent;
