import React from 'react'
import AddTodo from '../../components/todo/addtodo'
import TodoList from '../../components/todo/todolist'
import VisibilityFilter from '../../components/todo/visibilityFilter'

export default function TodoApp(){
    return (
        <div>
        <h1>to do list </h1>
        <AddTodo/>
        <TodoList/>
        <VisibilityFilter/>
        </div>
    )
}