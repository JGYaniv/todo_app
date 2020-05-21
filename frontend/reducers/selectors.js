const allTodos = (state) => {
    let keys = Object.keys(state.todos)
    let todos = keys.map((todoId) => {
        return state.todos[todoId]
    })
    return todos
}

export default allTodos