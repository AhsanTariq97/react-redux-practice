import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchPostsRequest = () => ({
    type: actionTypes.FETCH_POSTS_REQUEST,
})

export const fetchPostsSuccess = posts => ({
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: posts
})

export const fetchPostsFailure = error => ({
    type: actionTypes.FETCH_POSTS_FAILURE,
    payload: error
})

export const fetchPosts = () => {
    return (dispatch) => {
      dispatch(fetchPostsRequest());
      
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          const posts = response.data;
          dispatch(fetchPostsSuccess(posts));
        })
        .catch(error => {
          dispatch(fetchPostsFailure(error.message));
        });
    };
};

export const createPostRequest = () => ({
  type: actionTypes.CREATE_POST_REQUEST,
})

export const createPostSuccess = post => ({
  type: actionTypes.CREATE_POST_SUCCESS,
  payload: post
})

export const createPostFailure = error => ({
  type: actionTypes.CREATE_POST_FAILURE,
  payload: error
})

export const createPost = (post) => {
  return async (dispatch) => {
    dispatch(createPostRequest())
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
      const createdPost = response.data;
      dispatch(createPostSuccess(createdPost));
    } catch (error) {
      dispatch(createPostFailure(error.message));
    }
  };
};

export const editPost = (post) => ({
    type: actionTypes.EDIT_POST,
    payload: post
})

export const deletePost = (postId) => ({
    type: actionTypes.DELETE_POST,
    payload: postId
})
