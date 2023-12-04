import axios from "axios"

export const setTheme = (value) => {
    return {type: "SET_THEME", value}
}

export const setAuth = (value) => {
    return {type: "SET_AUTHORIZATION", value}
}

export const setUser = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/v1/auth/user/${id}`)
        .then(result => {
            dispatch({type: 'SET_USER', value: result.data.data});
        })
        .catch(err => console.log(err))
    }
} 