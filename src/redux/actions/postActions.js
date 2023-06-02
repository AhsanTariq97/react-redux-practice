import * as actionTypes from "./actionTypes";
import axios from "axios";
import { clearError, hideLoading, setError, showLoading } from "./generalActions";

export const fetchPostsSuccess = posts => ({
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: posts
})

export const fetchPosts = () => {
    return async (dispatch) => {
      dispatch(showLoading())
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(fetchPostsSuccess(response.data))
        dispatch(clearError())
        dispatch(hideLoading())
      } catch (error) {
        dispatch(setError(error.message))
        dispatch(hideLoading())
      }
    };
};

export const createPostSuccess = post => ({
  type: actionTypes.CREATE_POST_SUCCESS,
  payload: post
})


export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
      dispatch(createPostSuccess(response.data));
      dispatch(clearError())
    } catch (error) {
      dispatch(setError(error.message))
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
