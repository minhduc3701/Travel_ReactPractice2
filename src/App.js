import React from "react";
import "./App.css";

import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandle = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({
      userInput: updatedText
    });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandle(index)}
        ></Char>
      );
    });

    return (
      <div className="App">
        <h1>Practice 2</h1>
        <br />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <br />
        <h3>{this.state.userInput}</h3>
        <br />
        <Validation inputLength={this.state.userInput.length}></Validation>
        <br />
        {charList}
      </div>
    );
  }
}

export default App;
