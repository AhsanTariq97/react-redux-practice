import * as actionTypes from "../actions/actionTypes"

const initialState = {
    posts: [],
};

const postReducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            posts: action.payload,
        };
    case actionTypes.CREATE_POST_SUCCESS:
        return {
            ...state,
            posts: [...state.posts, action.payload],
        };
    case actionTypes.EDIT_POST: {
        return {
          ...state,
          posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
        };
    }
    case actionTypes.DELETE_POST: {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload)
        };
    }
    default:
    return state;
}
};

export default postReducer;