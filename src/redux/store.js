import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { combineReducers } from "redux";
import * as reducers from './reducers'

const rootReducer = combineReducers({
    tasks: reducers.taskReducer,
    users: reducers.userReducer,
    posts: reducers.postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
