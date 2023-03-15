import React, { Component } from 'react'

class ChangeState extends React.Component {
    constructor() {
      super()
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }

    changeColor = () => {
      this.setState({color: "blue",model:"Jegwar"});
    }

    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} {this.state.model} from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  export default ChangeState;