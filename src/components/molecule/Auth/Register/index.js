import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Gap, Link, Button, SuccessMsg, Alert } from '../../../atoms'
import '../style.css'

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [errorStatus, setErrorStatus] = useState(201)

    const onSubmit = () => {
        if (!name || !username || !password) return;
        axios.post('http://localhost:4000/v1/auth/register',{name,username,password})
        .then(res => {
            setErrorStatus(res.status)
            setSuccess(true)
        })
        .catch(err => {
            setErrorStatus(err.response.status)
            setErrorMsg(err.response.status === 0 ? err.message : err.response.data.message)
        })
    }

    return (
        <div className='login'>
            {
                success && <SuccessMsg msg='Thanks for signing up' 
                desc="Please login to access your account" onClick={() => navigate('/auth/login')}
                />    
            }
            {
                errorStatus === 500 || errorStatus === 0 ? <Alert msg={errorMsg} danger={true}/>:null
            }
            <h1>Sign up to eLearn</h1>
            <Gap height={10}/>
            <Input placeholder="Name" name='name' type="text" required={true} onChange={e => setName(e.target.value)}/>
            <Gap height={10}/>
            <Input placeholder="Username" name='username' type="text" required={true} onChange={e => setUsername(e.target.value)} error={errorStatus === 400} msg={errorMsg} />
            <Gap height={10}/>
            <Input placeholder="Password" name='password' type="password" required={true} onChange={e => setPassword(e.target.value)}/>
            <Gap height={30}/>
            <Button title="Create" onClick={() => onSubmit()}/>
            <Link title="Login Instead" id="auth-link" onClick={() => navigate('/auth/login')}/>
        </div>
    )
}

export default Register