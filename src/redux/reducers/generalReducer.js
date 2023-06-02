import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default generalReducer;