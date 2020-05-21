import React from 'react'
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from './todo_form'

const TodoList = ({todos, receiveTodo}) => {
    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => {
                    return <TodoListItem todo={todo}/>
                })}
            </ul>
            <TodoForm receiveTodo={receiveTodo}/>
        </>
    )
}

export default TodoList;