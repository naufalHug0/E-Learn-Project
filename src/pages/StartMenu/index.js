import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './start.css'
import axios from 'axios'

const StartMenu = () => {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/auth/user/${sessionStorage.getItem('_id')}`)
        .then(() => navigate('/'))
        document.title = 'Get Started to eLearn'
        return () => {document.title = 'eLearn'};
    }, [])

    return (
        <div className="start-page">
            <h1><span>e</span>Learn</h1>
            <button onClick={() => navigate('/auth/login')}>Mulai Belajar</button>
        </div>
    )
}

export default StartMenu