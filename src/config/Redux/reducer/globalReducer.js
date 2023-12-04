const initialState = {
    theme: sessionStorage.getItem('theme')||'light',
    isAuthorized: false,
    user: {}
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_THEME" :
            return {...state, theme: action.value}
        case "SET_AUTHORIZATION" :
            return {...state, isAuthorized: action.value}
        case "SET_USER" :
            return {...state, user: action.value}
        default: 
            
    }

    return state;
}

export default globalReducer;