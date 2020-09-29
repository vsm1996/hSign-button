import React, { Component } from "react";
import Button from "./button/Button";
import "./App.css";
import setDataAtr from "./data/setDataAtr";

class App extends Component {
  componentDidMount() {
    setDataAtr();
  }
  render() {
    return (
      <div className="App">
        <Button copy="Book a Place" url="/book-a-place" />
      </div>
    );
  }
}

export default App;
