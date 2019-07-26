import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const ADD_NEW_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_NEW_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: FETCH_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      console.log("Oh no! Where have all the smurfs gone?!", err.response)
    );
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_NEW_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: ADD_NEW_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => console.log("That ain't no Smurf! Rejected!", err.response));
};
