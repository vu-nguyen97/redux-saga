import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import loginReducers from './loginReducers'
import todoReducers from './todoReducers'

const rootReducers = combineReducers({
    login: loginReducers,
    todo: todoReducers
})
export const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);
