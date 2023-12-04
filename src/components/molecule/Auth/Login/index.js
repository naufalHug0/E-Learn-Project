import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Gap, Link, Button, Alert } from '../../../atoms'
import '../style.css'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, setUser } from '../../../../config/Redux/action'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [errorStatus, setErrorStatus] = useState(201)
    const dispatch = useDispatch();
    // const {isAuthorized} = useSelector(state=>state)

    const onSubmit = () => {
        axios.post('http://localhost:4000/v1/auth/login',{username,password})
        .then(res => {
            dispatch(setAuth(true))
            dispatch(setUser(res.data._id))
            sessionStorage.setItem('_id',res.data._id)
            setErrorStatus(res.status)
            navigate('/')
        })
        .catch(err => {
            setErrorStatus(err.response.status)
            setErrorMsg(err.response.status === 0 ? err.message : err.response.data.message)
        })
    }

    return (
        <div className='login'>
            {
                errorStatus === 500 || errorStatus === 0 ? <Alert msg={errorMsg} danger={true}/>:null
            }
            <h1>Sign in to eLearn</h1>
            <Gap height={10}/>

            <Input placeholder="Username" name='username' 
            type="text" required={true} 
            error={errorStatus === 404} 
            msg={errorMsg}
            onChange={e => setUsername(e.target.value)}
            />

            <Gap height={10}/>

            <Input placeholder="Password" 
            type="password" name='password' 
            required={true} 
            onChange={e => setPassword(e.target.value)}
            error={errorStatus === 404} 
            msg={errorMsg}
            />

            <Gap height={30}/>
            <Button title="Sign in" onClick={() => onSubmit()}/>
            <Link title="Create Account" id="auth-link" onClick={() => navigate('/auth/register')}/>
        </div>
    )
}

export default Login