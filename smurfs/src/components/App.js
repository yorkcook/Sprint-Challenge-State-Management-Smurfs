import React, { Component } from "react";
import "./App.css";

import SmurfVillage from "../SmurfVillage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfVillage />
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
