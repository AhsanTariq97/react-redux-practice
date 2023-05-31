import * as actionTypes from "../actions/actionTypes"

const initialState = [
    {
        id: '21312312',
        name: 'adawd',
        description: 'sadwada',
        status: 'Progress'
    }
]

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return [...state, action.payload]
        case actionTypes.DELETE_TASK:
            return state.filter(task => task.id !== action.payload)
        case actionTypes.EDIT_TASK:
            return state.map(task => task.id == action.payload.id ? action.payload : task)
        default:
            return state
    }
}

export default taskReducer