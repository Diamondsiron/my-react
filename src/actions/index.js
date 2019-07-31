import { createStore,combineReducers } from 'redux'
import counter from './reducers/counter'
import todoApp from './reducers/todoApp'

const stores = combineReducers({
    counter,
    todoApp
  })

let store  = createStore(stores)
console.log(store.getState());
 export default store
// let nextTodo = 0
// export const addTodo = text => ({
//     type : 'ADD_TODO',
//     id : nextTodo++,
//     text
// })

// export const setVisibilityFilter = filter => ({
//     type : 'SET_VISIBILITY_FILTER',
//     filter
// })

// export const toggleTodo = id => ({
//     type:'TOGGLE_TODO',
//     id
// })

// export const VisibilityFilter = {
//     SHOW_ALL:'SHOW_ALL',
//     SHOW_COMPLETED:'SHOW_COMPLETED',
//     SHOW_ACTIVE:'SHOW_ACTIVE'
// }