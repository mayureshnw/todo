let nextTodoId = 0;

export const addTodo = (payload) => dispatch => {
    dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        payload
    })
}

export const removeTodo = (id) => dispatch => {
    dispatch({
        type: 'REMOVE_TODO',
        id
    })
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})