import React, { useEffect, useState } from 'react'
import { Footer, Gap, Navbar } from '../../components'
import NotFound from '../Not Found'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from '../Home'
import Watch from '../Watch'
import { useSelector } from 'react-redux'
import axios from 'axios'
// import jwt_decode from 'jwt-decode'
// import axios from 'axios'

const MainApp = () => {
    const {theme} = useSelector(state => state)
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const [path, setPath] = useState('')
    // const [token, setToken] = useState('')

    const refreshToken = () => {
        try {
            axios.get('http://localhost:4000/v1/auth/token')
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
        catch (err) {

        }
    }

    useEffect(() => {
        // refreshToken();
        setPath(window.location.pathname)
        axios.get(`http://localhost:4000/v1/auth/user/${sessionStorage.getItem('_id')}`)
        .then(res => {
            setUser(res.data.data)
        })
        .catch(() => {
            navigate('/start')
        })
        document.body.setAttribute('id',theme)
    }, [theme, window.location.href, user])

    return (
        <div id={theme}>
        <Navbar user={user}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/watch/:id' element={<Watch/>}/>
            <Route path='*' element={<NotFound style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    color: 'var(--main-color)'
                }}/>}/>
        </Routes>
        <Gap height={80}/>
        {path.split("/")[1] === 'watch'||<Footer/>}
        </div>
    )
}

export default MainApp