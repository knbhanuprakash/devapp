import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
}


