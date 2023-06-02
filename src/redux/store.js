import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { combineReducers } from "redux";
import * as reducers from './reducers'

const rootReducer = combineReducers({
    tasks: reducers.taskReducer,
    users: reducers.userReducer,
    posts: reducers.postReducer,
    general: reducers.generalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk)),
)

export default store
