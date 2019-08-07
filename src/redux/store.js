import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware  =[thunk, createLogger]

export default createStore(
    rootReducer,
    applyMiddleware(...middleware)
)
