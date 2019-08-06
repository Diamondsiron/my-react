import React from 'react'
import {connect} from 'react-redux'
import cx from 'classnames'
import {toggleTodo} from '../../redux/actions'

const Todo = ({todo, toggleTodo}) => (
    <li onClick={()=>toggleTodo(todo.id)}>
        {todo && todo.completed ? "YES" : "NO"}{''}
        <span>
            {todo.content}
        </span>
    </li>
)

export default connect(null, {toggleTodo})(Todo)
