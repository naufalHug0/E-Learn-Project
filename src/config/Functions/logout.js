import axios from "axios"

const logout = () => {
    // axios.get('http://localhost:4000/v1/auth/logout')
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    sessionStorage.clear()
}

export default logout