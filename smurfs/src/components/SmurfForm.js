import React, { useState } from "react";

import { connect } from "react-redux";
import { addSmurf } from "../store/actions";

const SmurfForm = props => {
  const incomingSmurf = () => {
    props.addSmurf(smurf);
  };

  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h3>Hello from SmurfForm</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          incomingSmurf();
        }}
      >
        <input
          name="name"
          placeholder="name"
          value={props.name}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="age"
          value={props.age}
          onChange={handleChange}
        />
        <input
          name="height"
          placeholder="height"
          value={props.height}
          onChange={handleChange}
        />
        <button>Incoming Smurf!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("in mapStateToProps in form", state);
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
