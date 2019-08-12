import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
const logger = createLogger({
    // ...options
  });
const middleware  =[thunk, logger]

export default createStore(
    rootReducer,
    applyMiddleware(...middleware)
)
