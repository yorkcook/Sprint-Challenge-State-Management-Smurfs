import React from "react";

import { connect } from "react-redux";
import { fetchSmurfs } from "./store/actions";
import Smurf from "./components/Smurf";

const SmurfVillage = props => {
  const getSmurfs = e => {
    e.preventDefault();
    props.fetchSmurfs();
  };

  return (
    <div>
      <h1>Hello from the Village</h1>
      <button onClick={getSmurfs}>Smurf Button!</button>
      {props.smurfs.map(smurf => {
        return (
          <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("in mapStateToProps", state);
  return {
    error: state.error,
    isFetchingSmurf: state.isFetchingSmurf,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfVillage);
