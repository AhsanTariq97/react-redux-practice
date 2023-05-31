import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchUsersRequest = () => ({
    type: actionTypes.FETCH_USERS_REQUEST,
})

export const fetchUsersSuccess = users => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = error => ({
    type: actionTypes.FETCH_USERS_FAILURE,
    payload: error
})

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest());
      
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          const users = response.data;
          dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
          const errorMessage = error.message;
          dispatch(fetchUsersFailure(errorMessage));
        });
    };
};

export const editUser = (user) => ({
    type: actionTypes.EDIT_USER,
    payload: user
})
