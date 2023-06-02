import * as actionTypes from "../actions/actionTypes"

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
        return {
            ...state,
            users: action.payload,
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