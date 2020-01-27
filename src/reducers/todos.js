export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if(action.payload === '') {
                return state
            }
            return  [...state, 
                {
                    payload: action.payload,
                    id: action.id,
                    completed: false
                }
            ]
            
        case 'REMOVE_TODO':
            return  [...state.slice(0, action.index), ...state.slice(action.index + 1)]

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if(todo.id === action.id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            })

        default:
            return state
    }
}