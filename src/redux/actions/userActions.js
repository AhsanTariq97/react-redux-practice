import * as actionTypes from "./actionTypes";
import axios from "axios";
import { clearError, hideLoading, setError, showLoading } from "./generalActions";

export const fetchUsersSuccess = users => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsers = () => {
    return async (dispatch) => {
      dispatch(showLoading())
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(fetchUsersSuccess(response.data))
        dispatch(clearError())
        dispatch(hideLoading())
      } catch (error) {
        dispatch(setError(error.message))
        dispatch(hideLoading())
      }
    };
};

export const editUser = (user) => ({
    type: actionTypes.EDIT_USER,
    payload: user
})
