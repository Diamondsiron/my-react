import React from 'react'
import { connect } from 'react-redux'
import Todo from './todo'
import { getTodosByVisibilityFilter } from '../../redux/selectors'

const TodoList = ({todos}) => (
    <ul>
        {todos && todos.length
            ?todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />
            })
            : 'NO TODOS, YAY!'
        }
    </ul>
)

const mapStateToProps = state => {
    const {visitibilityFilter} = state
    const todos = getTodosByVisibilityFilter(state, visitibilityFilter);
    console.log('todos',todos,visitibilityFilter)
    return {todos}
};

export default connect(mapStateToProps)(TodoList)