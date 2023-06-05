import React, { Component } from 'react'
import App from '../App';

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
           <br></br>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} {this.state.model} from {this.state.year}.
          </p>
          <button
            type="button" className='btn btn-primary'
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  export default ChangeState;