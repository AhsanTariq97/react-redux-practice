import * as actionTypes from './actionTypes'

export const showLoading = () => ({
    type: actionTypes.SHOW_LOADING
})

export const hideLoading = () => ({
    type: actionTypes.HIDE_LOADING
})

export const setError = (error) => ({
    type: actionTypes.SET_ERROR,
    payload: error
})

export const clearError = () => ({
    type: actionTypes.CLEAR_ERROR
})
