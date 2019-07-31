const initialState = {
    isLogin: false,
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return state
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogin: true,
                error: null
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}