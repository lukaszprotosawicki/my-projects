import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    text: "w tym roku",
    error: "",
  };

  handleDateChange = (e) => {
    // console.log("zmiana");
    const value = this.refs.number.value;
    console.log(value);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleDateChange} type="text" ref="number" />
        <p>Odp: {this.state.text} </p>
      </div>
    );
  }
}
export default App;
