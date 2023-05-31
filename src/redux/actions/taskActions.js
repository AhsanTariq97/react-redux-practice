import * as actionTypes from "./actionTypes";

export const addTask = task => ({
    type: actionTypes.ADD_TASK,
    payload: task
})

export const deleteTask = taskId => ({
    type: actionTypes.DELETE_TASK,
    payload: taskId
})

export const editTask = updatedTask => ({
    type: actionTypes.EDIT_TASK,
    payload: updatedTask
})