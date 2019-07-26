import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from "../actions/index";

export const initialState = {
  error: "",
  isFetchingSmurf: false,
  smurfs: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: "",
        isFetchingSmurf: true,
        smurfs: []
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isFetchingSmurf: false,
        smurfs: action.payload
      };
    // case FETCH_SMURF_FAILURE:
    //   return {
    //     ...state,
    //     error: "",
    //     isFetchingSmurf: true,
    //     smurfs: []
    //   };
    default:
      return state;
  }
};
