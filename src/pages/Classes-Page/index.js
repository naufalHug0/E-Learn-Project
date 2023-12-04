import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Classes, Join_Class, Profile, Tasks } from '../../components'
import './classes-page.css'

const ClassesPage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Classes'
        return () => document.title = 'eLearn'
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/auth/user/${sessionStorage.getItem('_id')}`)
        .then(res => {
            setUser(res.data.data)
        })
        .catch(() => {
            navigate('/start')
        })
    },[user])

    return (
        <div className='classes-page'>
            <Classes/>
            <Tasks/>
            <Profile user={user}/>
        </div>
    )
}

export default ClassesPage