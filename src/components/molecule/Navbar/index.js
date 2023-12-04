import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../config';
import { setTheme } from '../../../config/Redux/action';
import './navbar.css'

const ACC_INFO = ({user}) => {
    const navigate = useNavigate()
    // const [user,setUser] = useState({})
    // useEffect(()=>{
    //     axios.get(`http://localhost:4000/v1/auth/user/${sessionStorage.getItem('_id')}`)
    //     .then(res=>{
    //         setUser(res.data.data)
    //     })
    //     .catch(()=>navigate('/start'))
    // },[])
    return (
        <div className="acc-info">
            <div className="acc-info__profile">
                <h2>{user.name && user.name.substring(0,1).toUpperCase()}</h2>
            </div>
            <h1>{user.name && user.name}</h1>
            <div className="acc-info__option">
                <p onClick={() => navigate('/account/classes')}>Classes</p>
                <p  onClick={() => navigate('/account/settings')}>Settings</p>
                <p onClick={() => {
                    logout()
                    navigate('/start')
                }}>Log Out</p>
            </div>
        </div>
    )
}

const Navbar = ({user}) =>{
    const icon_size = 20;
    const nav_iconSize = 35;
    const navigate = useNavigate()
    const [accActive, setAccActive] = useState(false)
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state)

    const changeTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark':'light'))
        sessionStorage.setItem('theme', theme === 'light' ? 'dark':'light')
    }

    const setThemeIcon = () => {
        return theme === 'dark' ? 
        <svg xmlns="http://www.w3.org/2000/svg" width={icon_size}  fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>:
        <svg xmlns="http://www.w3.org/2000/svg" width={icon_size} fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
    }

    useEffect(() => {}, [accActive,theme,user])

    return (
        <>
        <nav>
            <div className='nav__brand' onClick={() => navigate('/')}>
                <h1 className='logo'><span>e</span>Learn</h1>
            </div>
            <div className='nav__menu'>
                <ul className='nav__lists'>
                    <li className='nav__list' onClick={() => navigate('/')}>Home</li>
                    <li className='nav__list' onClick={() => navigate('/about')}>About</li>
                    <li className='nav__list' onClick={() => changeTheme()}>
                    {setThemeIcon()}
                    </li>
                    <li className='nav__list'>
                        <div className='nav__acc-icon' onClick={() => setAccActive(!accActive)}>{user.name && user.name.substring(0,1).toUpperCase()}</div>
                    </li>
                </ul>
            </div>
            <div className='nav__theme-icon' onClick={() => changeTheme()}>
                {setThemeIcon()}
            </div>
            {
                accActive ? <ACC_INFO user={user}/> : null
            }
        </nav>
        <div className='nav-mobile'>
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => navigate('/')} width={nav_iconSize} height={nav_iconSize} fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => navigate('/about')} width={nav_iconSize} height={nav_iconSize} fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={nav_iconSize} height={nav_iconSize} fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" onClick={() => setAccActive(!accActive)}>
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
        </div>
        </>
    )
}

export default Navbar