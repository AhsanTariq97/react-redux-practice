import * as actionTypes from "../actions/actionTypes"

const initialState = {
    posts: [],
    loading: false,
    error: null
};

const postReducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST:
        return {
            ...state,
            loading: true
        };
    case actionTypes.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            loading: false,
            posts: action.payload,
            error: null
        };
    case actionTypes.FETCH_POSTS_FAILURE:
        return {
            ...state,
            loading: false,
            posts: [],
            error: action.payload
        };
    case actionTypes.CREATE_POST_REQUEST:
        return {
            ...state,
        };
    case actionTypes.CREATE_POST_SUCCESS:
        return {
            ...state,
            posts: [...state.posts, action.payload],
            error: null
        };
    case actionTypes.CREATE_POST_FAILURE:
        return {
            ...state,
            error: action.payload
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