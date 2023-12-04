import React from 'react'
import {Login, Register} from '../../components'
import NotFound from '../Not Found'
import {Routes, Route, Navigate} from 'react-router-dom'
import './auth.css'
import axios from 'axios'

class Auth extends React.Component {
    state = {
        isAuthorized: false
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/v1/auth/user/${sessionStorage.getItem('_id')}`)
        .then(() => this.setState({isAuthorized: true}))
        document.body.style.backgroundColor = 'white'
    }
    render() {
        return this.state.isAuthorized ? <Navigate to='/'/>:
        (
            <div className="auth-container">
                <div className="brand-section">
                    <h1 className='logo'><span>e</span>Learn</h1>
                </div>
                <div className="auth-section">
                    <Routes>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/register' element={<Register/>}></Route>
                        <Route path='*' element={<NotFound/>}></Route>
                    </Routes>
                </div>
            </div>
        )
    }
}

export default Auth