import {createStore, compose, applyMiddleware} from 'redux'
import reducers from '../reducers'
import promiseMiddleware from 'redux-promise'

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, {}, componseEnhancers(applyMiddleware(promiseMiddleware)))