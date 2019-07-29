import React from "react";

const Smurf = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
      <h5>{props.height}</h5>
    </div>
  );
};

export default Smurf;
