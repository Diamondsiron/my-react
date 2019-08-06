import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'
import counter from './counter'
import todoApp from './todoApp'

export default combineReducers({todos, visibilityFilter, counter, todoApp})