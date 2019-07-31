export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
})
export const clearAll = () => ({
    type: 'CLEAR_ALL'
})
export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id
})
export const editTodo = (editInfo) => ({
    type: 'EDIT_TODO',
    payload: editInfo
})
export const login = (email, password) => ({
    type: 'LOGIN_REQUEST',
    payload: {
        email,
        password
    }
})
