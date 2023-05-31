import * as actionTypes from "../actions/actionTypes"

const initialState = {
    users: [],
    loading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
        return {
            ...state,
            loading: true
        };
    case actionTypes.FETCH_USERS_SUCCESS:
        return {
            ...state,
            loading: false,
            users: action.payload,
            error: null
        };
    case actionTypes.FETCH_USERS_FAILURE:
        return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        };
    case actionTypes.EDIT_USER: {
        return {
          ...state,
          users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
        };
    }
    default:
    return state;
}
};

export default userReducer;